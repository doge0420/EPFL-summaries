default: start

# Start Tailwind and Hugo in parallel
start:
	@echo "Starting Tailwind CSS and Hugo..."
	@make -j2 tailwind hugo

# Clean Tailwind and Hugo generated files
clean:
	@echo Cleaning Tailwind and Hugo generated files...
	@if exist assets\css\output.css del /F /Q assets\css\output.css
	@if exist public rmdir /S /Q public

tailwind:
	@npx @tailwindcss/cli -i ./assets/css/input.css -o ./assets/css/output.css --watch

hugo:
	@hugo \
		server \
		--bind=0.0.0.0 --disableFastRender \
		--cleanDestinationDir --gc --minify --printI18nWarnings --buildDrafts

.PHONY: start clean
