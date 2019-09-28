##　はじめに

申し込みなどがあった場合に、入力された情報をそのまま反映させてメールを送る実装が試したら、
とても詰まったのでここに残します。

開発環境
- node.js

使ったライブラリ

- nodemailer
- mustache

- fs
- dotenv

使ったメールツール
- outlook

```js
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const Mustache = require('mustache');
const fs = require('fs');

dotenv.config({ path: '.env' })

fsでファイルを読み込んで、mustacheで変数を変換する形になります。

// メールのセキュリティ設定。
// 送信に利用するメールの情報を記載。
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  tls: {
    ciphers: 'SSLv3',
  },
  auth: {
    user: 'hoge@sample.jp',
    pass: process.env.EMAIL_PASS,
  },
});

// HTMLファイルの読み込み。
const readFileContent = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: 'utf8',
      },
      (error, data) => {
        if (error !== null) {
          reject(error);
          return;
        }
        resolve(data);
      },
    );
  });
};
//申込者に送るメール用の情報の受け渡し
const applicationEmail = async name => {
  // PATHは相対ではなく絶対パス
  // promise を利用しているのでasync/awaitが必要。
  const template = await handleFile.readFileContent('./email/hello.html');
  Mustache.parse(template);
  const noticeData = {
    name,
  };
  // 変数に値を入れる。
  const renderApplicationEmail = Mustache.render(template, noticeData);
  return renderApplicationEmail;
};
////自分に送るメール用の情報の受け渡し
const noticeEmail = async (name, eMail) => {
  const template = await handleFile.readFileContent('./email/notice.html');
  Mustache.parse(template);
  const applicationData = {
    name,
    eMail,
  };
  const renderNoticeEmail = Mustache.render(template, applicationData);
  return renderNoticeEmail;
};

// メールを送信する関数
const sendCompletionMail = async (name, eMail) => {
  try {
    const application = await applicationEmail(number, name);
    transporter.sendMail({
      from: 'hoge@sample.jp',
      to: eMail,
      subject: 'お申し込みありがとうございます。',
      html: application,
    });
    const notice = await noticeEmail(name, eMail, telephone);
    transporter.sendMail({
      from: 'hoge@sample.jp',
      to: 'poke@sample.jp',
      subject: '申込通知。',
      html: notice,
    });
    console.log('send successful');
  } catch (error) {
    console.log('Error', error);
  }
};

  sendCompletionMail();



```

```hello.html

<!DOCTYPE HTML>
<html>
<body>
  <p>
    Dear {{name}},
  </p>
  <p>
    Thank you for purchasing our product.
  </p>
</body>
</html>

```

```notice.html

<!DOCTYPE HTML>
<html>
<body>
  <p>
     {{name}} applied.
  </p>
  <p>
    Take contact to {{email}}
  </p>
</body>
</html>

```

わざわざ
`applicationEmail()`という関数を作らなくとも、
`sendCompletionMail`内に書き込み、
｀html: renderApplicationEmail｀
にしても良いですが、複数定義の場合は可読性を優先して書きました。

##　参考
<https://github.com/janl/mustache.js/>
<https://nodejs.org/api/fs.html>