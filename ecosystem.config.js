module.exports = {
    apps: [
        {
            name: 'template_service',
            script: './dist/main.js',
            args: ' --start_grpc_server',
            instances: 1,
            instance_var: 'NODE_ID',
        },
        {
            name: 'template_service',
            script: './dist/main.js',
            args: ' --start_http_server',
            instances: 1,
            instance_var: 'NODE_ID',
        },
    ],
};
