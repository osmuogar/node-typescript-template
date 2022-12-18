################################################################################
# FILE DESCRIPTION.
################################################################################

# Set default shell
SHELL := /bin/sh

########################################
# DEPENDENCIES
########################################

# Used to check if node is installed
NODEJS := $(shell node --version 2>/dev/null)

########################################
# VARIABLES
########################################

PROJECT := $(shell cat package.json | grep \"name\" | head -1 | \
	sed -r 's/(name|[":, ])//g')
VERSION := $(shell cat package.json | grep \"version\" | head -1 | \
	sed -r 's/(version|[":, ])//g')
LICENSE := $(shell cat package.json | grep \"license\" | head -1 | \
	sed -r 's/(license|[":,])//g')

SRC_FILES:=$(shell find src/ -type f)
TEST_FILES:=$(shell find test/ -type f)

########################################
# BASIC RULES
########################################

# Nothing is done by default
.PHONY: default
default: dist

# Installs the program
.PHONY: install
install:
	@echo "Not possible to install this program.";
	@exit 1;

# Prepares the code ready to distribute
dist: $(SRC_FILES) tsconfig.json package.json | node_modules check_node_env
	@rm -rf $@
	@npm run build

# Starts execution
.PHONY: start
start: $(SRC_FILES) package.json | node_modules check_node_env
	@npm start $(ARGS)

# Executes tests
.PHONY: test
test: $(SRC_FILES) $(TEST_FILES) tsconfig.json package.json | node_modules \
	check_node_env
	@npm test

# Test alias
.PHONY: check
check: test

# Test coverage report
.PHONY: coverage
coverage: $(SRC_FILES) $(TEST_FILES) tsconfig.json package.json | node_modules \
	check_node_env
	@npm run coverage

# Executes linter
.PHONY: lint
lint: $(SRC_FILES) $(TEST_FILES) tsconfig.json package.json | node_modules \
	check_node_env
	@npm run lint

# Generates documentation
doc: $(SRC_FILES) tsconfig.json package.json | node_modules check_node_env
	@npm run doc

# Clean files
.PHONY: clean
clean:
	@echo "Check files to remove with 'git clean -xdn'"
	@echo "Remove files with 'git clean -xdf'"

# Prints the project version
.PHONY: version
version: package.json
	@echo $(PROJECT) v$(VERSION)

# Prints the project information
.PHONY: info
info: package.json
	@echo $(PROJECT) is under license: $(LICENSE)

########################################
# SPECIPHIC RULES
########################################

# Check NODE_ENV is correctly set
.PHONY: check_node_env
check_node_env:
	@case "$(NODE_ENV)" in \
	production|development|test)\
		;;\
	*)\
		echo "Invalid NODE_ENV: '$(NODE_ENV)'."; \
		echo "Valid values are 'production', 'development' and 'test'."; \
		exit 1;\
	esac

# Check if docker is installed
.PHONY: installed_nodejs
installed_nodejs:
	@if [ -z "$(NODEJS)" ] ; then \
		echo "Nodejs is required"; \
		exit 1; \
	fi

# Installs required dependencies
node_modules: package.json | installed_nodejs
	@case "$(NODE_ENV)" in \
		production)\
			npm install --production; \
			;;\
		*)\
			npm install; \
		esac
	@touch -m $@
