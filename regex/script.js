  function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

document.body.onload = () => {
	document.getElementById("extract").onclick = () => {
		const regex = new RegExp(document.getElementById("expression").value, "g");
		const str = document.getElementById("inputData").value;
		const group = document.getElementById("group").value;
		matches = str.matchAll(regex);
		const out = [];
		for (const match of matches) {
		  out.push(match[group]);
		}
		downloadObjectAsJson(out, "matches");
	}
}