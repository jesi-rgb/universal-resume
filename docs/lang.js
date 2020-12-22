function localize (language)
{
    var split_lang = language.split('-')[0];

    let lang = ':lang(' + split_lang + ')';
    let hide = '[lang]:not(' + lang + ')';
    document.querySelectorAll(hide).forEach(function (node) {
        node.style.display = 'none';
    });
    let show = '[lang]' + lang;
    document.querySelectorAll(show).forEach(function (node) {
        node.style.display = 'unset';
    });

}