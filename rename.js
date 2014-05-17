var scriptPath = WScript.ScriptFullName;
scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf(WScript.ScriptName));
var fso = new ActiveXObject("Scripting.FileSystemObject");
var folder = fso.GetFolder(scriptPath);

var suffixOfTemp = "_TEMP_";

//確認ダイアログ

var wshShell = new ActiveXObject("WScript.Shell");
var ans = wshShell.Popup(
    scriptPath + " において、フォルダ名の後ろについた "+suffixOfTemp +" を消す処理を行います"
    , 0, "実行確認", 1 + 64);//1:OKキャンセルボタン 64情報アイコン

if( ans == 2 ) {
    WScript.Quit(-1);
}
//本番

var subFolderCollection = folder.SubFolders;
var subfolder;

var e = new Enumerator(subFolderCollection);

for (; !e.atEnd(); e.moveNext()) {
    subfolder = e.item();
    var index = subfolder.Name.lastIndexOf(suffixOfTemp);
    if (index != -1) {
        subfolder.Name = subfolder.Name.substr(0, index);

    }
}
WScript.Echo("処理が終了しました");