build:
	cd server && $(MAKE) build
	cd client && $(MAKE) build
	cd nginx && $(MAKE) build

run:
	docker-compose up

stop:
	docker-compose down