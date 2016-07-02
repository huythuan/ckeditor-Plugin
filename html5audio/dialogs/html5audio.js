CKEDITOR.dialog.add( 'html5audioDialog', function( editor ) {

    return {
	title : editor.lang.html5audio.title,
        minWidth: 400,
        minHeight: 75,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'text',
                        id: 'html5audioURL',
			label : editor.lang.html5audio.txtUrl,
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;
	    var url=dialog.getValueOf( 'tab-basic', 'html5audioURL').trim();
            var content = '';          
            content += '<p>';
            content += '<audio controls><source src="' + url + '"' + ' type="audio/mpeg">';
            content += 'Click <a href="' + url + '"> here </a> to listen';
            content += '</audio>';
	    content += '</p>';
	    editor.insertHtml(content);
        }
    };
});
