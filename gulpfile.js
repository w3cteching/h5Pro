//安装gulp来配置任务 
var gulp = require('gulp');
var loadPlugins = require('gulp-load-plugins')();


//配置压缩任务
gulp.task('yasuo', function () {
	gulp.src('src/js/pub.js')
		.pipe(loadPlugins.uglify())
		.pipe(loadPlugins.rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dest/js'))

});

//配置编译less
gulp.task('lessToCss', function () {
	gulp.src('src/less/*.less')
		.pipe(loadPlugins.less())
		.pipe(gulp.dest('dest/css'))
})


//自动监听  watch
gulp.task('default111', function () {
	gulp.watch(['src/js/*.js', 'src/less/*.less'], ['yasuo', 'lessToCss']);
})

//js检查  jshint
gulp.task('jscheck', function () {
	return gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))

});

//先检查,再压缩
/*gulp.task('checkyasuo',function() {	
	gulp.src('src/js/pub.js')
	    .pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(rename({
			suffix:'.min'
	    }))
	    .pipe(uglify())
	    .pipe(gulp.dest('dest/js'))

});*/

gulp.task('aaaa', ['jscheck'], function () {
	gulp.src('src/js/pub.js')
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dest/js'))

});


//静态服务器
gulp.task('run', function () {
	webserver.server({
		root: 'dest',
		port: 6789,
		livereload: true
	});

})


gulp.task('html', function () {
	gulp.src('dest/*.html')
		.pipe(webserver.reload());
});

gulp.task('watch', function () {
	gulp.watch(['dest/*.html'], ['html']);
});



//删除
gulp.task('del', function () {
	return gulp.src('dest/css')
		.pipe(del())

})



//先删除后压缩css
gulp.task('mincss', ['del'], function () {
	gulp.src('src/css/**/*.css')
		.pipe(mincss())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dest/css'))
})

//合并文件
gulp.task('merge', function () {
	gulp.src('src/js/*.js')
		.pipe(concat("merge.js"))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dest/js'))

})

//图片压缩任务
gulp.task('imagemin', function () {
	gulp.src('src/imgs/*.png')
		.pipe(imagein())
		.pipe(gulp.dest('dest/imgs'))

})

gulp.task('default', ['run', 'watch', 'mincss']);