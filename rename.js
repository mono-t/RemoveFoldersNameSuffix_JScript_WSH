var scriptPath = WScript.ScriptFullName;
scriptPath = scriptPath.substr(0, scriptPath.lastIndexOf(WScript.ScriptName));
var fso = new ActiveXObject("Scripting.FileSystemObject");
var folder = fso.GetFolder(scriptPath);

var suffixOfTemp = "_TEMP_";

//�m�F�_�C�A���O

var wshShell = new ActiveXObject("WScript.Shell");
var ans = wshShell.Popup(
    scriptPath + " �ɂ����āA�t�H���_���̌��ɂ��� "+suffixOfTemp +" �������������s���܂�"
    , 0, "���s�m�F", 1 + 64);//1:OK�L�����Z���{�^�� 64���A�C�R��

if( ans == 2 ) {
    WScript.Quit(-1);
}
//�{��

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
WScript.Echo("�������I�����܂���");