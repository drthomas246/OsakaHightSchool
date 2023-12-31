import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const PrivacyPolicyDialog: React.FC = () => {
  return (
    <>
      <DialogTitle variant="h4" sx={{ textAlign: "center" }}>
        プライバシーポリシー
      </DialogTitle>
      <Typography variant="body1" sx={{ margin: "0px 10px 10px 10px" }}>
        本プライバシーポリシー(以降本ポリシー)は、当サイト管理人(山原
        喜寛)における個人情報の保護およびその適切な取り扱いについての方針を示したものです。
      </Typography>
      <Typography variant="h6" sx={{ margin: "0px 10px" }}>
        【個人情報の取得、利用、共有について】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px" }}>
        <ul>
          <li>当サイトでは、一部のコンテンツ（以降コンテンツ）について、お名前やメールアドレスをご登録いただく場合があります。</li>
          <li>コンテンツでご登録いただいた上記情報は、当サイト管理者と連絡を取るために使用させていただきます。</li>
          <li>
            コンテンツ内で現在地を取得するために、位置情報にアクセスしますが、ブラウザ内でのみ使用し、サーバーサイドには一切データを保存しておりません。
          </li>
          <li>
            当サイトでは、訪問者本人の許可なく第三者に個人情報を開示いたしません。また、法律の適用を受ける場合や法的強制力のある請求以外には、いかなる個人情報も開示いたしません。
          </li>
        </ul>
      </Typography>
      <Typography variant="h6" sx={{ margin: "0px 10px" }}>
        【クッキー（Cookie）の利用について】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px" }}>
        <ul>
          <li>当サイトでは、コンテンツについて、情報の収集にクッキーを使用しています。</li>
          <li>クッキーは、訪問者がサイトを訪れた際に、その訪問者のコンピュータ内に記録されます。</li>
          <li>ただし、記録される情報には、お名前やメールアドレスなど、個人を特定するものは一切含まれておりません。</li>
          <li>
            また、当サイトでは訪問者の方々がどのようなサービスに興味をお持ちなのかを分析したり、ウェブ上での効果的な広告の配信のためにこれらを利用させていただく場合があります。
          </li>
        </ul>
      </Typography>
      <Typography variant="h6" sx={{ margin: "0px 10px" }}>
        【当サイトが利用・提携しているサービスについて】
      </Typography>
      <Typography variant="body1" sx={{ margin: "10px" }}>
        広告配信
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 10px 30px" }}>
        当サイトでは、下記の第三者配信の広告サービスを利用しています。
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 0px 30px" }}>
        Googleアドセンス
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px" }}>
        <ul>
          <li>
            このような広告配信事業者は、訪問者の興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報
            『Cookie』（お名前、ご住所、メールアドレス、電話番号は含まれません）を使用することがあります。
          </li>
          <li>
            またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
            <Link href="http://www.google.co.jp/policies/technologies/ads/" underline="always">
              こちら
            </Link>
            をご覧ください。
          </li>
        </ul>
      </Typography>
      <Typography variant="body1" sx={{ margin: "10px" }}>
        アクセス解析ツール
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 10px 30px" }}>
        当サイトでは、下記のアクセス解析ツールを利用しています。
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 0px 30px" }}>
        Googleアナリティクス
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 0px 10px" }}>
        <ul>
          <li>Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。</li>
          <li>このトラフィックデータは匿名で収集されており、個人を特定するものではありません。</li>
          <li>
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            各規約に関して、詳しくは以下をご覧ください。
          </li>
        </ul>
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 10px 50px" }}>
        <Link href="https://support.google.com/analytics/answer/7124332?hl=ja" underline="always">
          Googleアナリティクス
        </Link>
      </Typography>
      <Typography variant="h6" sx={{ margin: "0px 10px" }}>
        【免責事項】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px" }}>
        <ul>
          <li>
            当サイトのすべてのコンテンツ・情報・ソフトウェアにつきまして、可能な限り正確な情報を掲載するよう努めておりますが、必ずしも正確性・信頼性等を保証するものではありません。
          </li>
          <li>最善の注意を払って情報を提供していますが、誤情報が入り込んだり、情報が古くなっていることもございます。</li>
          <li>
            当サイトに掲載された内容、当サイトのリンク先が提供するソフトウェアによって生じた損害等の一切の責任を負いかねますのでご了承ください。
            本免責事項、および、当サイトに掲載しているすべてのコンテンツ・情報は、予告なしに変更・削除されることがあります。
          </li>
        </ul>
      </Typography>
      <Typography variant="h6" sx={{ margin: "0px 10px" }}>
        【著作権】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px" }}>
        <ul>
          <li>
            当サイトに掲載されている全ての文章、写真画像、動画及びリンク先のソフトウェアは、山原
            喜寛が所有しています。書面による許可なく、個人的な目的以外で使用することは禁止されています。
          </li>
        </ul>
      </Typography>
      <Typography variant="h6" sx={{ margin: "0px 10px" }}>
        【プライバシーポリシーの変更】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px 10px 30px" }}>
        <ul>
          <li>本ポリシーの内容は、法令の定めのある事項を除いて、訪問者に通知することなく、変更することができるものとします。</li>
          <li>変更後の本ポリシーは、当サイトに掲載したときから効力を生じるものとします。</li>
        </ul>
      </Typography>
      <Typography variant="h6" sx={{ margin: "0px 10px" }}>
        【お問い合わせ】
      </Typography>
      <Typography variant="body1" sx={{ margin: "0px 10px" }}>
        <ul>
          <li>本ポリシーに関するお問い合わせは、バージョン情報内のメールアドレスまでお願いします。</li>
        </ul>
      </Typography>
    </>
  );
};

export default PrivacyPolicyDialog;
