#!/bin/bash
find . -mindepth 1 -maxdepth 1 | wc -l | tr -d '\n'
echo '$'

