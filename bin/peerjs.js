#!/usr/bin/env node
const express = require('express')
const { ExpressPeerServer } = require('peer')

const app = express();
const server = app.listen(9000);
const peerServer = ExpressPeerServer(server, {
  path: '/filesamosa'
})

app.use('/peerjs', peerServer)
