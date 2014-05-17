WSHのJSでRF RemoveFoldersNameSuffix_JScript_WSH
===================================

フォルダ名の後ろについたゴミを消すWSH(Windows Script Host)のJScript

### このプロジェクトについて
見ての通り、サンプルプログラムレベルの内容しかありません。
かといって別の場所で作り直したりするのも面倒なので、せっかくだからリポジトリを作りました。
FlattenFolders_JScript_WSHの兄弟です。

### 機能・使い方
このスクリプトとwsfファイルが置かれたフォルダの後ろに指定された文字列がある場合、取り除きます。
使用するときにはこの二ファイルをコピーしてください。
Windowsならwsfファイルをダブルクリックか何かすれば動くんじゃないでしょうか。
JSの変数、suffixOfTempは必要に応じて書き変えてください。

FlattenFolders_JScript_WSHでフォルダの後ろに_TEMP_とかつけられてしまったのをこれで取り除くといいのではないでしょうか。

### 動作環境
* Windows Script Hostの動作する環境

ただし、作った人([@monotea_error](https://twitter.com/monotea_error))は Windows8.1Proでのみ動作確認を行っています。

### 開発環境など
Windows Script Hostで動作するJScriptをサクラエディタやTerapad、あるいはnotepadで編集しています。
当初はTypeScriptを試しましたが、TypeScriptの恩恵を全くと言っていいほど得られなかったのでやめにしました。
今後もしかしたらTypeScriptで作るように変わるかもしれません。

#### ライセンス
* MIT License

MIT ライセンスの下で公開する、オープンソース / フリーソフトウェアです。一応。
