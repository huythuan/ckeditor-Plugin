CKEDITOR.plugins.add( 'html5audio', {
    icons: 'html5audio',
    lang: [ 'en', 'pt', 'ja', 'hu', 'it', 'fr', 'tr', 'ru', 'de', 'ar', 'nl', 'pl', 'vi', 'zh', 'el', 'he', 'es', 'nb', 'nn', 'fi', 'et', 'sk', 'cs'],
    init: function( editor ) {
        editor.addCommand( 'html5audioDialog', new CKEDITOR.dialogCommand( 'html5audioDialog' ) );

        editor.ui.addButton( 'html5audio', {
	    label : editor.lang.html5audio.button,
	    toolbar : 'insert',
	    command : 'html5audioDialog',
	    icon : this.path + 'icons/html5audio.png'
	});

        CKEDITOR.dialog.add( 'html5audioDialog', this.path + 'dialogs/html5audio.js' );
    }
});
