const chokidar = require('chokidar');
const {exec} = require('child_process');
const browserSync = require('browser-sync').create();

const filePath = 'templates/index.html';

browserSync.init({
    server: {
        baseDir: './dist',  // 服务器根目录，可以根据项目调整
        index: 'index.html'  // 生成的 HTML 文件
    }
});

const watcher = chokidar.watch(filePath, {
    persistent: true
});

watcher.on('change', (path) => {
    console.log(`${path} has been modified, recompiling...`);

    exec('python3 -m render', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`Python script error: ${stderr}`);
            return;
        }

        browserSync.reload();
    });
});

console.log(`Watching for changes in ${filePath}`);