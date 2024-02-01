# Multiple Containers Demo

This branch is an example of how to implement independent stream containers with their own IDs. The same setup guide as the main branch applies, with the exception of adding the additional stream container IDs in the `atomicCongig.js` file.

In this demo each of the views (single, vertical, launcher) are linked to a different stream container ID, so each one will render a different stream of cards.
