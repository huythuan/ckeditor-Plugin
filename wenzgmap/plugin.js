/**
 * @license MIT 
 *
 * all right I have no idea about MIT license, but put it on seems cool. :P  Enjoy!
 */
CKEDITOR.plugins.add( 'wenzgmap', {
    icons: 'wenzgmap',
    lang: [ 'en', 'pt', 'ja', 'hu', 'it', 'fr', 'tr', 'ru', 'de', 'ar', 'nl', 'pl', 'vi', 'zh', 'el', 'he', 'es', 'nb', 'nn', 'fi', 'et', 'sk', 'cs'],
    init: function( editor ) {
        editor.addCommand('wenzgmapDialog', new CKEDITOR.dialogCommand('wenzgmapDialog'));
        editor.ui.addButton('wenzgmap', {
            label: 'Insert a google map',
            command: 'wenzgmapDialog',
            toolbar: 'paragraph',
            icon : this.path + 'icons/wenzgmap.png'
        });

        CKEDITOR.dialog.add('wenzgmapDialog', this.path + 'dialogs/wenzgmap.js');
    }
});