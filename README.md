# Multistream 

![demo](https://i.imgur.com/KmE6eqp.gif)

## Why Multistream?
Multistream is a way to stream to multiple platforms at the same time, a feature that is not available on some broadcasters (such as OBS Studio, for example).

## Downloads 

 - [Windows](https://github.com/joaojlf4/multistream/blob/master/windowsRelease/Multistream%200.2.2%20ia32.msi?raw=true)

## Usage
After installing the version for windows (soon, multiplatform), open and add as many streams as you want. Now, in your broadcast software, set the server url to `rtmp://localhost:1935/live` in the stream settings (make sure port 1935 is not in use). You can set stream key as `preview` to get a demo of your stream (if you don't, leave stream key empty). Now, in Multistream, click on "Start Server". Start the stream normally in your streaming software, like OBS Studio.

## How to contribute?

First of all [install the project](https://github.com/joaojlf4/multistream#downloads);

To open a pull-request, first create a fork of the project for your account, then clone the project on your machine:

`git clone git@github.com:your-username/multistream.git`

Then, replace node_modules/node-media-server/node_relay_server.js file with the [modified_node_modules/node_relay_server.js](https://github.com/joaojlf4/multistream/blob/master/modified_node_modules/node_relay_server.js) file

Now you can start contributing to the project!

## Donate!
Now you can buy me a coffee: https://www.buymeacoffee.com/joaojlf4