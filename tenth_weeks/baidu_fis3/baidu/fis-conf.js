//加MD5
fis.match('*.{js,css}', {
    release: '/static/$0',
    useHash: true
});

fis.match('*.png', {
    release: '/png/$0',
    useHash: true
});

fis.match('*.jpg', {
    release: '/jpg/$0',
    useHash: true
});

//启用fis-spriter-csssprites
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});

//对css进行图片合并
fis.match('*.css', {
    useSprite: true
});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});