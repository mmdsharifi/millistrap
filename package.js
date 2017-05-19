Package.describe({
    name: 'millistrap:millistrap',
    version: '1.2.0',
    summary: 'A minimalist CSS framework.',
    git: 'https://github.com/mmdsharifi/millistrap.git',
    documentation: 'readme.md'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0');
    api.addFiles([
        'dist/millistrap.css'
    ], 'client');
});