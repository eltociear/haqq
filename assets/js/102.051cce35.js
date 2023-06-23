(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{657:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrade-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-node"}},[e._v("#")]),e._v(" Upgrade Node")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("Learn how to upgrade your full node to the latest software version")]),e._v(" "),a("p",[e._v("With every new software release, we strongly recommend validators to perform a software upgrade, in order to prevent "),a("a",{attrs:{href:"https://docs.tendermint.com/master/spec/consensus/signing.html#double-signing",target:"_blank",rel:"noopener noreferrer"}},[e._v("double signing or halting the chain during consensus"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("You can upgrade your node by 1) upgrading your software version and 2) upgrading your node to that version. In this guide, you can find out how to automatically upgrade your node with Cosmovisor or perform the update manually.")]),e._v(" "),a("h2",{attrs:{id:"software-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-upgrade"}},[e._v("#")]),e._v(" Software Upgrade")]),e._v(" "),a("p",[e._v("These instructions are for full nodes that have ran on previous versions of and would like to upgrade to the latest testnet.")]),e._v(" "),a("p",[e._v("First, stop your instance of "),a("code",[e._v("haqqd")]),e._v(". Next, upgrade the software:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgaGFxcQpnaXQgZmV0Y2ggLS1hbGwgJmFtcDsmYW1wOyBnaXQgY2hlY2tvdXQgJmx0O25ld192ZXJzaW9uJmd0OwptYWtlIGluc3RhbGwK"}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("If you have issues at this step, please check that you have the latest stable version of GO installed.")])]),e._v(" "),a("p",[e._v("You will need to ensure that the version installed matches the one needed for th testnet. Check the Haqq "),a("a",{attrs:{href:"https://github.com/haqq-network/haqq/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release page"),a("OutboundLink")],1),e._v(" for details on each release.")]),e._v(" "),a("p",[e._v("Verify that everything is OK. If you get something like the following, you've successfully installed Haqq on your system.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBoYXFxZCB2ZXJzaW9uIC0tbG9uZwoKbmFtZTogaGFxcQpzZXJ2ZXJfbmFtZTogaGFxcWQKdmVyc2lvbjogMC40LjAKY29tbWl0OiAwNzBiNjY4ZjJjYmJmNTI1NDhjNDZlOTZiMjM2ZTA5ODg0NDgzZGQ0CmJ1aWxkX3RhZ3M6IG5ldGdvLGxlZGdlcgpnbzogZ28gdmVyc2lvbiBnbzEuMTggZGFyd2luL2FtZDY0Ci4uLgo="}}),e._v(" "),a("p",[e._v("If the software version does not match, then please check your $PATH to ensure the correct haqqd is running.")]),e._v(" "),a("h2",{attrs:{id:"upgrade-node-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-node-2"}},[e._v("#")]),e._v(" Upgrade Node")]),e._v(" "),a("p",[e._v("We highly recommend validators use Cosmovisor to run their nodes. This will make low-downtime upgrades smoother, as validators don't have to manually upgrade binaries during the upgrade. Instead users can preinstall new binaries, and cosmovisor will automatically update them based on on-chain Software Upgrade proposals.")]),e._v(" "),a("p",[e._v("You should review the docs for Cosmovisor located "),a("a",{attrs:{href:"https://docs.cosmos.network/master/run-node/cosmovisor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("If you choose to use Cosmovisor, please continue with these instructions. If you choose to upgrade your node manually instead, skip to the "),a("a",{attrs:{href:"#upgrade-manually"}},[e._v("the instructions without Cosmovisor")])]),e._v(" "),a("h3",{attrs:{id:"upgrade-with-cosmovisor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-with-cosmovisor"}},[e._v("#")]),e._v(" Upgrade with Cosmovisor")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("cosmovisor")]),e._v(" is a small process manager for Cosmos SDK application binaries that monitors the governance module for incoming chain upgrade proposals. If it sees a proposal that gets approved, cosmovisor can automatically download the new binary, stop the current binary, switch from the old binary to the new one, and finally restart the node with the new binary.")])]),e._v(" "),a("h4",{attrs:{id:"install-and-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-and-setup"}},[e._v("#")]),e._v(" Install and Setup")]),e._v(" "),a("p",[e._v("To get started with "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmovisor"),a("OutboundLink")],1),e._v(" first download it")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gZ2V0IGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29zbW92aXNvci9jbWQvY29zbW92aXNvcgo="}}),e._v(" "),a("p",[e._v("Set up the Cosmovisor environment variables. We recommend setting these in your "),a("code",[e._v(".profile")]),e._v(" so it is automatically set in every session.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWNobyAmcXVvdDsjIFNldHVwIENvc21vdmlzb3ImcXVvdDsgJmd0OyZndDsgfi8ucHJvZmlsZQplY2hvICZxdW90O2V4cG9ydCBEQUVNT05fTkFNRT1oYXFxZCZxdW90OyAmZ3Q7Jmd0OyB+Ly5wcm9maWxlCmVjaG8gJnF1b3Q7ZXhwb3J0IERBRU1PTl9IT01FPSRIT01FLy5oYXFxZCZxdW90OyAmZ3Q7Jmd0OyB+Ly5wcm9maWxlCmVjaG8gJ2V4cG9ydCBQQVRIPSZxdW90OyREQUVNT05fSE9NRS9jb3Ntb3Zpc29yL2N1cnJlbnQvYmluOiRQQVRIJnF1b3Q7JyAmZ3Q7Jmd0OyB+Ly5wcm9maWxlCnNvdXJjZSB+Ly5wcm9maWxlCg=="}}),e._v(" "),a("p",[e._v("After this, you must make the necessary folders for cosmosvisor in your daemon home directory (~/.haqqd).")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgfi8uaGFxcWQvY29zbW92aXNvci91cGdyYWRlcwpta2RpciAtcCB+Ly5oYXFxZC9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluCmNwICQod2hpY2ggaGFxcWQpIH4vLmhhcXFkL2Nvc21vdmlzb3IvZ2VuZXNpcy9iaW4vCgojIFZlcmlmeSB0aGUgc2V0dXAKIyBJdCBzaG91bGQgcmV0dXJuIHRoZSBzYW1lIHZlcnNpb24gYXMgaGFxcWQKY29zbW92aXNvciB2ZXJzaW9uCg=="}}),e._v(" "),a("h4",{attrs:{id:"preparing-an-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing-an-upgrade"}},[e._v("#")]),e._v(" Preparing an Upgrade")]),e._v(" "),a("p",[e._v("Cosmovisor will continually poll the "),a("code",[e._v("$DAEMON_HOME/data/upgrade-info.json")]),e._v(" for new upgrade instructions. When an upgrade is ready, node operators can download the new binary and place it under "),a("code",[e._v("$DAEMON_HOME/cosmovisor/upgrades/<name>/bin")]),e._v(" where "),a("code",[e._v("<name>")]),e._v(" is the URI-encoded name of the upgrade as specified in the upgrade module plan.")]),e._v(" "),a("p",[e._v("It is possible to have Cosmovisor automatically download the new binary. To do this set the following environment variable.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXhwb3J0IERBRU1PTl9BTExPV19ET1dOTE9BRF9CSU5BUklFUz10cnVlCg=="}}),e._v(" "),a("h4",{attrs:{id:"download-genesis-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-genesis-file"}},[e._v("#")]),e._v(" Download Genesis File")]),e._v(" "),a("p",[e._v('You can now download the "genesis" file for the chain. It is pre-filled with the entire genesis state and gentxs.')]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBjdXJsIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS90aGFyc2lzL3Rlc3RuZXRzL21haW4vb2x5bXB1c19tb25zL2dlbmVzaXMuanNvbiAmZ3Q7IH4vLmhhcXFkL2NvbmZpZy9nZW5lc2lzLmpzb24K"}}),e._v(" "),a("p",[e._v("We recommend using "),a("code",[e._v("sha256sum")]),e._v(" to check the hash of the genesis.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2Qgfi8uaGFxcWQvY29uZmlnCmVjaG8gJnF1b3Q7MmI1MTY0ZjRiYWIwMDI2M2NiNDI0YzNkMGFhNWM0N2E3MDcxODRjNmZmMjg4MzIyYWNjNGM3ZTBjNWY2ZjM2ZiAgZ2VuZXNpcy5qc29uJnF1b3Q7IHwgc2hhMjU2c3VtIC1jCg=="}}),e._v(" "),a("h4",{attrs:{id:"reset-chain-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-chain-database"}},[e._v("#")]),e._v(" Reset Chain Database")]),e._v(" "),a("p",[e._v("There shouldn't be any chain database yet, but in case there is for some reason, you should reset it. This is a good idea especially if you ran "),a("code",[e._v("haqqd start")]),e._v(" on an old, broken genesis file.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgdW5zYWZlLXJlc2V0LWFsbAo="}}),e._v(" "),a("h4",{attrs:{id:"ensure-that-you-have-set-peers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ensure-that-you-have-set-peers"}},[e._v("#")]),e._v(" Ensure that you have set peers")]),e._v(" "),a("p",[e._v("In "),a("code",[e._v("~/.haqqd/config/config.toml")]),e._v(" you can set your peers. See the "),a("a",{attrs:{href:"https://github.com/tharsis/testnets/blob/main/olympus_mons/peers.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("peers.txt"),a("OutboundLink")],1),e._v(" file for a list of up to date peers.")]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://evmos.dev/testnet/join.html#add-persistent-peers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add persistent peers section"),a("OutboundLink")],1),e._v(" in our docs for an automated method, but field should look something like a comma separated string of peers (do not copy this, just an example):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGVyc2lzdGVudF9wZWVycyA9ICZxdW90OzU1NzZiMDE2MDc2MWZlODFjY2RmODhlMDYwMzFhMDFiYzg2NDNkNTFAMTk1LjIwMS4xMDguOTc6MjQ2NTYsMTNlODUwZDE0NjEwZjk2NmRlMzhmYzJmOTI1ZjZkYzM1YzdmNGJmNEAxNzYuOS42MC4yNzoyNjY1NiwzOGViNDk4NGY4OTg5OWE1ZDhkMWYwNGE3OWIzNTZmMTU2ODFiYjc4QDE4LjE2OS4xNTUuMTU5OjI2NjU2LDU5YzQzNTEwMDkyMjNiMzY1MjY3NGJkNWVlNDMyNDkyNmE1YTExYWFANTEuMTUuMTMzLjI2OjI2NjU2LDNhNWE5MDIyYzhhYTIyMTRhN2FmMjZlYmJmYWM0OWI3N2UzNGU1YzVANjUuMTA4LjEuNDY6MjY2NTYsNGZjMGJlYTIwNDRjOWZkMWVhOGNjOTg3MTE5YmI4YmRmZjkxYWFmM0A2NS4yMS4yNDYuMTI0OjI2NjU2LDY2MjQyMzgxNjhkZTA1ODkzY2E3NGMyYjAyNzA1NTMxODk4MTBhYTdAOTUuMjE2LjEwMC44MDoyNjY1Niw5ZDI0NzI4NmNkNDA3ZGM4ZDA3NTAyMjQwMjQ1ZjgzNmUxOGMwNTE3QDE0OS4yNDguMzIuMjA4OjI2NjU2LDM3ZDU5MzcxZjc1NzgxMDFkZWU3NGQ1YTI2Yzg2MTI4YTIyOWI4YmZAMTk0LjE2My4xNzIuMTY4OjI2NjU2LGI2MDcwNTBiNGU1YjA2ZTUyYzEyZmNmMmRiNjkzMGZkMDkzN2VmM2JAOTUuMjE3LjEwNy45NjoyNjY1Niw3YTZiYmJiNmY2MTQ2Y2IxMWFlYmY3NzAzOTA4OWNkMDM4MDAzOTY0QDk0LjEzMC41NC4yNDc6MjY2NTYmcXVvdDsK"}}),e._v(" "),a("p",[e._v("You can share your peer with")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgdGVuZGVybWludCBzaG93LW5vZGUtaWQK"}}),e._v(" "),a("p",[a("strong",[e._v("Peer Format")]),e._v(": "),a("code",[e._v("node-id@ip:port")])]),e._v(" "),a("p",[a("strong",[e._v("Example")]),e._v(": "),a("code",[e._v("3d892cfa787c164aca6723e689176207c1a42025@143.198.224.124:26656")])]),e._v(" "),a("p",[e._v("If you are relying on just seed node and no persistent peers or a low amount of them, please increase the following params in "),a("code",[e._v("config.toml")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBNYXhpbXVtIG51bWJlciBvZiBpbmJvdW5kIHBlZXJzCm1heF9udW1faW5ib3VuZF9wZWVycyA9IDIwMAoKIyBNYXhpbXVtIG51bWJlciBvZiBvdXRib3VuZCBwZWVycyB0byBjb25uZWN0IHRvLCBleGNsdWRpbmcgcGVyc2lzdGVudCBwZWVycwptYXhfbnVtX291dGJvdW5kX3BlZXJzID0gMTAwCg=="}}),e._v(" "),a("h4",{attrs:{id:"start-your-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-your-node"}},[e._v("#")]),e._v(" Start your node")]),e._v(" "),a("p",[e._v("Now that everything is setup and ready to go, you can start your node.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW92aXNvciBzdGFydAo="}}),e._v(" "),a("p",[e._v("You will need some way to keep the process always running. If you're on linux, you can do this by creating a service.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyB0ZWUgL2V0Yy9zeXN0ZW1kL3N5c3RlbS9oYXFxZC5zZXJ2aWNlICZndDsgL2Rldi9udWxsICZsdDsmbHQ7RU9GCltVbml0XQpEZXNjcmlwdGlvbj1IYXFxIERhZW1vbgpBZnRlcj1uZXR3b3JrLW9ubGluZS50YXJnZXQKCltTZXJ2aWNlXQpVc2VyPSRVU0VSCkV4ZWNTdGFydD0kKHdoaWNoIGNvc21vdmlzb3IpIHN0YXJ0ClJlc3RhcnQ9YWx3YXlzClJlc3RhcnRTZWM9MwpMaW1pdE5PRklMRT1pbmZpbml0eQoKRW52aXJvbm1lbnQ9JnF1b3Q7REFFTU9OX0hPTUU9JEhPTUUvLmhhcXFkJnF1b3Q7CkVudmlyb25tZW50PSZxdW90O0RBRU1PTl9OQU1FPWhhcXFkJnF1b3Q7CkVudmlyb25tZW50PSZxdW90O0RBRU1PTl9BTExPV19ET1dOTE9BRF9CSU5BUklFUz1mYWxzZSZxdW90OwpFbnZpcm9ubWVudD0mcXVvdDtEQUVNT05fUkVTVEFSVF9BRlRFUl9VUEdSQURFPXRydWUmcXVvdDsKCltJbnN0YWxsXQpXYW50ZWRCeT1tdWx0aS11c2VyLnRhcmdldApFT0YK"}}),e._v(" "),a("p",[e._v("Then update and start the node")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyAtUyBzeXN0ZW1jdGwgZGFlbW9uLXJlbG9hZApzdWRvIC1TIHN5c3RlbWN0bCBlbmFibGUgaGFxcWQKc3VkbyAtUyBzeXN0ZW1jdGwgc3RhcnQgaGFxcWQK"}}),e._v(" "),a("p",[e._v("You can check the status with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3lzdGVtY3RsIHN0YXR1cyBoYXFxZAo="}}),e._v(" "),a("h3",{attrs:{id:"upgrade-manually"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-manually"}},[e._v("#")]),e._v(" Upgrade Manually")]),e._v(" "),a("h4",{attrs:{id:"upgrade-genesis-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-genesis-file"}},[e._v("#")]),e._v(" Upgrade Genesis File")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("If the new version you are upgrading to has breaking changes, you will have to "),a("a",{attrs:{href:"#export-state"}},[e._v("export")]),e._v(" the state  and "),a("a",{attrs:{href:"#restart-node"}},[e._v("restart")]),e._v(" your node.")]),e._v(" "),a("p",[e._v("If it is "),a("strong",[e._v("not")]),e._v(" breaking (eg. from "),a("code",[e._v("v0.1.x")]),e._v(" to "),a("code",[e._v("v0.1.<x+1>")]),e._v("), you can skip to "),a("a",{attrs:{href:"#restart-node"}},[e._v("Restart")]),e._v(" after installing the new version.")])]),e._v(" "),a("p",[e._v("To upgrade the genesis file, you can either fetch it from a trusted source or export it locally using the "),a("code",[e._v("haqqd export")]),e._v(" command.")]),e._v(" "),a("h4",{attrs:{id:"fetch-from-a-trusted-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-from-a-trusted-source"}},[e._v("#")]),e._v(" Fetch from a Trusted Source")]),e._v(" "),a("p",[e._v("If you are joining an existing testnet, you can fetch the genesis from the appropriate testnet source/repository where the genesis file is hosted.")]),e._v(" "),a("p",[e._v("Save the new genesis as "),a("code",[e._v("new_genesis.json")]),e._v(". Then, replace the old "),a("code",[e._v("genesis.json")]),e._v(" with "),a("code",[e._v("new_genesis.json")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgJEhPTUUvLmhhcXFkL2NvbmZpZwpjcCAtZiBnZW5lc2lzLmpzb24gb2xkX2dlbmVzaXMuanNvbgptdiAvUEFUSC90by9uZXdfZ2VuZXNpcy5qc29uIGdlbmVzaXMuanNvbgo="}}),e._v(" "),a("h4",{attrs:{id:"export-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-state"}},[e._v("#")]),e._v(" Export State")]),e._v(" "),a("p",[e._v("Haqq can dump the entire application state to a JSON file. This, besides upgrades, can be\nuseful for manual analysis of the state at a given height.")]),e._v(" "),a("p",[e._v("Export state with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgZXhwb3J0ICZndDsgbmV3X2dlbmVzaXMuanNvbgo="}}),e._v(" "),a("p",[e._v("You can also export state from a particular height (at the end of processing the block of that height):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgZXhwb3J0IC0taGVpZ2h0IFtoZWlnaHRdICZndDsgbmV3X2dlbmVzaXMuanNvbgo="}}),e._v(" "),a("p",[e._v("If you plan to start a new network for 0 height (i.e genesis) from the exported state, export with the "),a("code",[e._v("--for-zero-height")]),e._v(" flag:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgZXhwb3J0IC0taGVpZ2h0IFtoZWlnaHRdIC0tZm9yLXplcm8taGVpZ2h0ICZndDsgbmV3X2dlbmVzaXMuanNvbgo="}}),e._v(" "),a("p",[e._v("Then, replace the old "),a("code",[e._v("genesis.json")]),e._v(" with "),a("code",[e._v("new_genesis.json")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3AgLWYgZ2VuZXNpcy5qc29uIG9sZF9nZW5lc2lzLmpzb24KbXYgL1BBVEgvdG8vbmV3X2dlbmVzaXMuanNvbiBnZW5lc2lzLmpzb24K"}}),e._v(" "),a("p",[e._v("At this point, you might want to run a script to update the exported genesis into a genesis state that is compatible with your new version.")]),e._v(" "),a("p",[e._v("You can use the "),a("code",[e._v("migrate")]),e._v(" command to migrate from a given version to the next one (eg: "),a("code",[e._v("v0.X.X")]),e._v(" to "),a("code",[e._v("v1.X.X")]),e._v("):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgbWlncmF0ZSBbdGFyZ2V0LXZlcnNpb25dIFsvcGF0aC90by9nZW5lc2lzLmpzb25dIC0tY2hhaW4taWQ9Jmx0O25ld19jaGFpbl9pZCZndDsgLS1nZW5lc2lzLXRpbWU9Jmx0O3l5eXktbW0tZGRUaGg6bW06c3NaJmd0Owo="}}),e._v(" "),a("h4",{attrs:{id:"restart-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restart-node"}},[e._v("#")]),e._v(" Restart Node")]),e._v(" "),a("p",[e._v("To restart your node once the new genesis has been updated, use the "),a("code",[e._v("start")]),e._v(" command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgc3RhcnQK"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);