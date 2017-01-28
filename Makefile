main:
	echo 'Hello'

build:
	gulp

deploy: build
	-rm -rf ./dist/.git/
	cd dist && git init . && git remote add github https://github.com/ztbcms/module.git\
	&& git add -A && git commit -m 'Update' && git checkout -b gh-pages \
	&& git push -f github gh-pages


.PHONY: main deploy