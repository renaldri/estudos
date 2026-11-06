// Google Apps Script: implante como Aplicativo da Web (executar como você; acesso: qualquer pessoa).
function arquivo_() {
  var it = DriveApp.getFilesByName('progresso-escrevente.json');
  return it.hasNext() ? it.next() : DriveApp.createFile('progresso-escrevente.json', '{}');
}
function doGet() {
  return ContentService.createTextOutput(arquivo_().getBlob().getDataAsString()).setMimeType(ContentService.MimeType.JSON);
}
function doPost(e) {
  arquivo_().setContent(e.postData.contents);
  return ContentService.createTextOutput('ok');
}
