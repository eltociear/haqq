(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{703:function(c,d,e){"use strict";e.r(d);var a=e(1),l=Object(a.a)({},(function(){var c=this,d=c.$createElement,e=c._self._c||d;return e("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[e("h1",{attrs:{id:"transactions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[c._v("#")]),c._v(" Transactions")]),c._v(" "),e("p",[c._v("This section defines the "),e("code",[c._v("sdk.Msg")]),c._v(" concrete types that result in the state transitions defined on the previous section.")]),c._v(" "),e("h2",{attrs:{id:"msgethereumtx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgethereumtx"}},[c._v("#")]),c._v(" "),e("code",[c._v("MsgEthereumTx")])]),c._v(" "),e("p",[c._v("An EVM state transition can be achieved by using the "),e("code",[c._v("MsgEthereumTx")]),c._v(". This message encapsulates an Ethereum transaction data ("),e("code",[c._v("TxData")]),c._v(") as a "),e("code",[c._v("sdk.Msg")]),c._v(". It contains the necessary transaction data fields. Note, that the "),e("code",[c._v("MsgEthereumTx")]),c._v(" implements both the "),e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.39.2/types/tx_msg.go#L7-L29",target:"_blank",rel:"noopener noreferrer"}},[e("code",[c._v("sdk.Msg")]),e("OutboundLink")],1),c._v(" and "),e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.39.2/types/tx_msg.go#L33-L41",target:"_blank",rel:"noopener noreferrer"}},[e("code",[c._v("sdk.Tx")]),e("OutboundLink")],1),c._v(" interfaces. Normally,  SDK messages only implement the former, while the latter is a group of messages bundled together.")]),c._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dFdGhlcmV1bVR4IHN0cnVjdCB7CiAvLyBpbm5lciB0cmFuc2FjdGlvbiBkYXRhCiBEYXRhICp0eXBlcy5BbnkgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEsb3B0LG5hbWU9ZGF0YSxwcm90bzMmcXVvdDsganNvbjomcXVvdDtkYXRhLG9taXRlbXB0eSZxdW90O2AKIC8vIERFUFJFQ0FURUQ6IGVuY29kZWQgc3RvcmFnZSBzaXplIG9mIHRoZSB0cmFuc2FjdGlvbgogU2l6ZV8gZmxvYXQ2NCBgcHJvdG9idWY6JnF1b3Q7Zml4ZWQ2NCwyLG9wdCxuYW1lPXNpemUscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7LSZxdW90O2AKIC8vIHRyYW5zYWN0aW9uIGhhc2ggaW4gaGV4IGZvcm1hdAogSGFzaCBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDMsb3B0LG5hbWU9aGFzaCxwcm90bzMmcXVvdDsganNvbjomcXVvdDtoYXNoLG9taXRlbXB0eSZxdW90OyBybHA6JnF1b3Q7LSZxdW90O2AKIC8vIGV0aGVyZXVtIHNpZ25lciBhZGRyZXNzIGluIGhleCBmb3JtYXQuIFRoaXMgYWRkcmVzcyB2YWx1ZSBpcyBjaGVja2VkCiAvLyBhZ2FpbnN0IHRoZSBhZGRyZXNzIGRlcml2ZWQgZnJvbSB0aGUgc2lnbmF0dXJlIChWLCBSLCBTKSB1c2luZyB0aGUKIC8vIHNlY3AyNTZrMSBlbGxpcHRpYyBjdXJ2ZQogRnJvbSBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDQsb3B0LG5hbWU9ZnJvbSxwcm90bzMmcXVvdDsganNvbjomcXVvdDtmcm9tLG9taXRlbXB0eSZxdW90O2AKfQo="}}),c._v(" "),e("p",[c._v("This message field validation is expected to fail if:")]),c._v(" "),e("ul",[e("li",[e("code",[c._v("From")]),c._v(" field is defined and the address is invalid")]),c._v(" "),e("li",[e("code",[c._v("TxData")]),c._v(" stateless validation fails")])]),c._v(" "),e("p",[c._v("The transaction execution is expected to fail if:")]),c._v(" "),e("ul",[e("li",[c._v("Any of the custom "),e("code",[c._v("AnteHandler")]),c._v(" Ethereum decorators checks fail:\n"),e("ul",[e("li",[c._v("Minimum gas amount requirements for transaction")]),c._v(" "),e("li",[c._v("Tx sender account doesn't exist or hasn't enough balance for fees")]),c._v(" "),e("li",[c._v("Account sequence doesn't match the transaction "),e("code",[c._v("Data.AccountNonce")])]),c._v(" "),e("li",[c._v("Message signature verification fails")])])]),c._v(" "),e("li",[c._v("EVM contract creation (i.e "),e("code",[c._v("evm.Create")]),c._v(") fails, or "),e("code",[c._v("evm.Call")]),c._v(" fails")])]),c._v(" "),e("h3",{attrs:{id:"conversion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conversion"}},[c._v("#")]),c._v(" Conversion")]),c._v(" "),e("p",[c._v("The "),e("code",[c._v("MsgEthreumTx")]),c._v(" can be converted to the go-ethereum "),e("code",[c._v("Transaction")]),c._v(" and "),e("code",[c._v("Message")]),c._v(" types in order to create and call evm contracts.")]),c._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQXNUcmFuc2FjdGlvbiBjcmVhdGVzIGFuIEV0aGVyZXVtIFRyYW5zYWN0aW9uIHR5cGUgZnJvbSB0aGUgbXNnIGZpZWxkcwpmdW5jIChtc2cgTXNnRXRoZXJldW1UeCkgQXNUcmFuc2FjdGlvbigpICpldGh0eXBlcy5UcmFuc2FjdGlvbiB7CiB0eERhdGEsIGVyciA6PSBVbnBhY2tUeERhdGEobXNnLkRhdGEpCiBpZiBlcnIgIT0gbmlsIHsKICByZXR1cm4gbmlsCiB9CgogcmV0dXJuIGV0aHR5cGVzLk5ld1R4KHR4RGF0YS5Bc0V0aGVyZXVtRGF0YSgpKQp9CgovLyBBc01lc3NhZ2UgcmV0dXJucyB0aGUgdHJhbnNhY3Rpb24gYXMgYSBjb3JlLk1lc3NhZ2UuCmZ1bmMgKHR4ICpUcmFuc2FjdGlvbikgQXNNZXNzYWdlKHMgU2lnbmVyLCBiYXNlRmVlICpiaWcuSW50KSAoTWVzc2FnZSwgZXJyb3IpIHsKIG1zZyA6PSBNZXNzYWdlewogIG5vbmNlOiAgICAgIHR4Lk5vbmNlKCksCiAgZ2FzTGltaXQ6ICAgdHguR2FzKCksCiAgZ2FzUHJpY2U6ICAgbmV3KGJpZy5JbnQpLlNldCh0eC5HYXNQcmljZSgpKSwKICBnYXNGZWVDYXA6ICBuZXcoYmlnLkludCkuU2V0KHR4Lkdhc0ZlZUNhcCgpKSwKICBnYXNUaXBDYXA6ICBuZXcoYmlnLkludCkuU2V0KHR4Lkdhc1RpcENhcCgpKSwKICB0bzogICAgICAgICB0eC5UbygpLAogIGFtb3VudDogICAgIHR4LlZhbHVlKCksCiAgZGF0YTogICAgICAgdHguRGF0YSgpLAogIGFjY2Vzc0xpc3Q6IHR4LkFjY2Vzc0xpc3QoKSwKICBpc0Zha2U6ICAgICBmYWxzZSwKIH0KIC8vIElmIGJhc2VGZWUgcHJvdmlkZWQsIHNldCBnYXNQcmljZSB0byBlZmZlY3RpdmVHYXNQcmljZS4KIGlmIGJhc2VGZWUgIT0gbmlsIHsKICBtc2cuZ2FzUHJpY2UgPSBtYXRoLkJpZ01pbihtc2cuZ2FzUHJpY2UuQWRkKG1zZy5nYXNUaXBDYXAsIGJhc2VGZWUpLCBtc2cuZ2FzRmVlQ2FwKQogfQogdmFyIGVyciBlcnJvcgogbXNnLmZyb20sIGVyciA9IFNlbmRlcihzLCB0eCkKIHJldHVybiBtc2csIGVycgp9Cg=="}}),c._v(" "),e("h3",{attrs:{id:"signing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#signing"}},[c._v("#")]),c._v(" Signing")]),c._v(" "),e("p",[c._v("In order for the signature verification to be valid, the  "),e("code",[c._v("TxData")]),c._v(" must contain the "),e("code",[c._v("v | r | s")]),c._v(" values from the "),e("code",[c._v("Signer")]),c._v(". Sign calculates a secp256k1 ECDSA signature and signs the transaction. It takes a keyring signer and the chainID to sign an Ethereum transaction according to EIP155 standard. This method mutates the transaction as it populates the V, R, S fields of the Transaction's Signature. The function will fail if the sender address is not defined for the msg or if the sender is not registered on the keyring.")]),c._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2lnbiBjYWxjdWxhdGVzIGEgc2VjcDI1NmsxIEVDRFNBIHNpZ25hdHVyZSBhbmQgc2lnbnMgdGhlIHRyYW5zYWN0aW9uLiBJdAovLyB0YWtlcyBhIGtleXJpbmcgc2lnbmVyIGFuZCB0aGUgY2hhaW5JRCB0byBzaWduIGFuIEV0aGVyZXVtIHRyYW5zYWN0aW9uIGFjY29yZGluZyB0bwovLyBFSVAxNTUgc3RhbmRhcmQuCi8vIFRoaXMgbWV0aG9kIG11dGF0ZXMgdGhlIHRyYW5zYWN0aW9uIGFzIGl0IHBvcHVsYXRlcyB0aGUgViwgUiwgUwovLyBmaWVsZHMgb2YgdGhlIFRyYW5zYWN0aW9uJ3MgU2lnbmF0dXJlLgovLyBUaGUgZnVuY3Rpb24gd2lsbCBmYWlsIGlmIHRoZSBzZW5kZXIgYWRkcmVzcyBpcyBub3QgZGVmaW5lZCBmb3IgdGhlIG1zZyBvciBpZgovLyB0aGUgc2VuZGVyIGlzIG5vdCByZWdpc3RlcmVkIG9uIHRoZSBrZXlyaW5nCmZ1bmMgKG1zZyAqTXNnRXRoZXJldW1UeCkgU2lnbihldGhTaWduZXIgZXRodHlwZXMuU2lnbmVyLCBrZXlyaW5nU2lnbmVyIGtleXJpbmcuU2lnbmVyKSBlcnJvciB7CiBmcm9tIDo9IG1zZy5HZXRGcm9tKCkKIGlmIGZyb20uRW1wdHkoKSB7CiAgcmV0dXJuIGZtdC5FcnJvcmYoJnF1b3Q7c2VuZGVyIGFkZHJlc3Mgbm90IGRlZmluZWQgZm9yIG1lc3NhZ2UmcXVvdDspCiB9CgogdHggOj0gbXNnLkFzVHJhbnNhY3Rpb24oKQogdHhIYXNoIDo9IGV0aFNpZ25lci5IYXNoKHR4KQoKIHNpZywgXywgZXJyIDo9IGtleXJpbmdTaWduZXIuU2lnbkJ5QWRkcmVzcyhmcm9tLCB0eEhhc2guQnl0ZXMoKSkKIGlmIGVyciAhPSBuaWwgewogIHJldHVybiBlcnIKIH0KCiB0eCwgZXJyID0gdHguV2l0aFNpZ25hdHVyZShldGhTaWduZXIsIHNpZykKIGlmIGVyciAhPSBuaWwgewogIHJldHVybiBlcnIKIH0KCiBtc2cuRnJvbUV0aGVyZXVtVHgodHgpCiByZXR1cm4gbmlsCn0K"}}),c._v(" "),e("h2",{attrs:{id:"txdata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#txdata"}},[c._v("#")]),c._v(" TxData")]),c._v(" "),e("p",[c._v("The "),e("code",[c._v("MsgEthereumTx")]),c._v(" supports the 3 valid Ethereum transaction data types from go-ethereum: "),e("code",[c._v("LegacyTx")]),c._v(", "),e("code",[c._v("AccessListTx")]),c._v("  and "),e("code",[c._v("DynamicFeeTx")]),c._v(". These types are defined as protobuf messages and packed into a "),e("code",[c._v("proto.Any")]),c._v(" interface type in the "),e("code",[c._v("MsgEthereumTx")]),c._v(" field.")]),c._v(" "),e("ul",[e("li",[e("code",[c._v("LegacyTx")]),c._v(": "),e("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md",target:"_blank",rel:"noopener noreferrer"}},[c._v("EIP-155"),e("OutboundLink")],1),c._v(" transaction type")]),c._v(" "),e("li",[e("code",[c._v("DynamicFeeTx")]),c._v(": "),e("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1559",target:"_blank",rel:"noopener noreferrer"}},[c._v("EIP-1559"),e("OutboundLink")],1),c._v(" transaction type. Enabled by London hard fork block")]),c._v(" "),e("li",[e("code",[c._v("AccessListTx")]),c._v(": "),e("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-2930",target:"_blank",rel:"noopener noreferrer"}},[c._v("EIP-2930"),e("OutboundLink")],1),c._v(" transaction type. Enabled by Berlin hard fork block")])]),c._v(" "),e("h3",{attrs:{id:"legacytx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#legacytx"}},[c._v("#")]),c._v(" "),e("code",[c._v("LegacyTx")])]),c._v(" "),e("p",[c._v("The transaction data of regular Ethereum transactions.")]),c._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBMZWdhY3lUeCBzdHJ1Y3QgewogLy8gbm9uY2UgY29ycmVzcG9uZHMgdG8gdGhlIGFjY291bnQgbm9uY2UgKHRyYW5zYWN0aW9uIHNlcXVlbmNlKS4KIE5vbmNlIHVpbnQ2NCBgcHJvdG9idWY6JnF1b3Q7dmFyaW50LDEsb3B0LG5hbWU9bm9uY2UscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7bm9uY2Usb21pdGVtcHR5JnF1b3Q7YAogLy8gZ2FzIHByaWNlIGRlZmluZXMgdGhlIHZhbHVlIGZvciBlYWNoIGdhcyB1bml0CiBHYXNQcmljZSAqZ2l0aHViX2NvbV9jb3Ntb3NfY29zbW9zX3Nka190eXBlcy5JbnQgYHByb3RvYnVmOiZxdW90O2J5dGVzLDIsb3B0LG5hbWU9Z2FzX3ByaWNlLGpzb249Z2FzUHJpY2UscHJvdG8zLGN1c3RvbXR5cGU9Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5JbnQmcXVvdDsganNvbjomcXVvdDtnYXNfcHJpY2Usb21pdGVtcHR5JnF1b3Q7YAogLy8gZ2FzIGRlZmluZXMgdGhlIGdhcyBsaW1pdCBkZWZpbmVkIGZvciB0aGUgdHJhbnNhY3Rpb24uCiBHYXNMaW1pdCB1aW50NjQgYHByb3RvYnVmOiZxdW90O3ZhcmludCwzLG9wdCxuYW1lPWdhcyxwcm90bzMmcXVvdDsganNvbjomcXVvdDtnYXMsb21pdGVtcHR5JnF1b3Q7YAogLy8gaGV4IGZvcm1hdHRlZCBhZGRyZXNzIG9mIHRoZSByZWNpcGllbnQKIFRvIHN0cmluZyBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsNCxvcHQsbmFtZT10byxwcm90bzMmcXVvdDsganNvbjomcXVvdDt0byxvbWl0ZW1wdHkmcXVvdDtgCiAvLyB2YWx1ZSBkZWZpbmVzIHRoZSB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlIG9mIHRoZSB0cmFuc2FjdGlvbiBhbW91bnQuCiBBbW91bnQgKmdpdGh1Yl9jb21fY29zbW9zX2Nvc21vc19zZGtfdHlwZXMuSW50IGBwcm90b2J1ZjomcXVvdDtieXRlcyw1LG9wdCxuYW1lPXZhbHVlLHByb3RvMyxjdXN0b210eXBlPWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuSW50JnF1b3Q7IGpzb246JnF1b3Q7dmFsdWUsb21pdGVtcHR5JnF1b3Q7YAogLy8gaW5wdXQgZGVmaW5lcyB0aGUgZGF0YSBwYXlsb2FkIGJ5dGVzIG9mIHRoZSB0cmFuc2FjdGlvbi4KIERhdGEgW11ieXRlIGBwcm90b2J1ZjomcXVvdDtieXRlcyw2LG9wdCxuYW1lPWRhdGEscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7ZGF0YSxvbWl0ZW1wdHkmcXVvdDtgCiAvLyB2IGRlZmluZXMgdGhlIHNpZ25hdHVyZSB2YWx1ZQogViBbXWJ5dGUgYHByb3RvYnVmOiZxdW90O2J5dGVzLDcsb3B0LG5hbWU9dixwcm90bzMmcXVvdDsganNvbjomcXVvdDt2LG9taXRlbXB0eSZxdW90O2AKIC8vIHIgZGVmaW5lcyB0aGUgc2lnbmF0dXJlIHZhbHVlCiBSIFtdYnl0ZSBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsOCxvcHQsbmFtZT1yLHByb3RvMyZxdW90OyBqc29uOiZxdW90O3Isb21pdGVtcHR5JnF1b3Q7YAogLy8gcyBkZWZpbmUgdGhlIHNpZ25hdHVyZSB2YWx1ZQogUyBbXWJ5dGUgYHByb3RvYnVmOiZxdW90O2J5dGVzLDksb3B0LG5hbWU9cyxwcm90bzMmcXVvdDsganNvbjomcXVvdDtzLG9taXRlbXB0eSZxdW90O2AKfQo="}}),c._v(" "),e("p",[c._v("This message field validation is expected to fail if:")]),c._v(" "),e("ul",[e("li",[e("code",[c._v("GasPrice")]),c._v(" is invalid ("),e("code",[c._v("nil")]),c._v(" , negaitve or out of int256 bound)")]),c._v(" "),e("li",[e("code",[c._v("Fee")]),c._v(" (gasprice * gaslimit) is invalid")]),c._v(" "),e("li",[e("code",[c._v("Amount")]),c._v(" is invalid (negaitve or out of int256 bound)")]),c._v(" "),e("li",[e("code",[c._v("To")]),c._v(" address is invalid (non valid ethereum hex address)")])]),c._v(" "),e("h3",{attrs:{id:"dynamicfeetx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dynamicfeetx"}},[c._v("#")]),c._v(" "),e("code",[c._v("DynamicFeeTx")])]),c._v(" "),e("p",[c._v("The transaction data of EIP-1559 dynamic fee transactions.")]),c._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBEeW5hbWljRmVlVHggc3RydWN0IHsKIC8vIGRlc3RpbmF0aW9uIEVWTSBjaGFpbiBJRAogQ2hhaW5JRCAqZ2l0aHViX2NvbV9jb3Ntb3NfY29zbW9zX3Nka190eXBlcy5JbnQgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEsb3B0LG5hbWU9Y2hhaW5faWQsanNvbj1jaGFpbklkLHByb3RvMyxjdXN0b210eXBlPWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuSW50JnF1b3Q7IGpzb246JnF1b3Q7Y2hhaW5JRCZxdW90O2AKIC8vIG5vbmNlIGNvcnJlc3BvbmRzIHRvIHRoZSBhY2NvdW50IG5vbmNlICh0cmFuc2FjdGlvbiBzZXF1ZW5jZSkuCiBOb25jZSB1aW50NjQgYHByb3RvYnVmOiZxdW90O3ZhcmludCwyLG9wdCxuYW1lPW5vbmNlLHByb3RvMyZxdW90OyBqc29uOiZxdW90O25vbmNlLG9taXRlbXB0eSZxdW90O2AKIC8vIGdhcyB0aXAgY2FwIGRlZmluZXMgdGhlIG1heCB2YWx1ZSBmb3IgdGhlIGdhcyB0aXAKIEdhc1RpcENhcCAqZ2l0aHViX2NvbV9jb3Ntb3NfY29zbW9zX3Nka190eXBlcy5JbnQgYHByb3RvYnVmOiZxdW90O2J5dGVzLDMsb3B0LG5hbWU9Z2FzX3RpcF9jYXAsanNvbj1nYXNUaXBDYXAscHJvdG8zLGN1c3RvbXR5cGU9Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5JbnQmcXVvdDsganNvbjomcXVvdDtnYXNfdGlwX2NhcCxvbWl0ZW1wdHkmcXVvdDtgCiAvLyBnYXMgZmVlIGNhcCBkZWZpbmVzIHRoZSBtYXggdmFsdWUgZm9yIHRoZSBnYXMgZmVlCiBHYXNGZWVDYXAgKmdpdGh1Yl9jb21fY29zbW9zX2Nvc21vc19zZGtfdHlwZXMuSW50IGBwcm90b2J1ZjomcXVvdDtieXRlcyw0LG9wdCxuYW1lPWdhc19mZWVfY2FwLGpzb249Z2FzRmVlQ2FwLHByb3RvMyxjdXN0b210eXBlPWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuSW50JnF1b3Q7IGpzb246JnF1b3Q7Z2FzX2ZlZV9jYXAsb21pdGVtcHR5JnF1b3Q7YAogLy8gZ2FzIGRlZmluZXMgdGhlIGdhcyBsaW1pdCBkZWZpbmVkIGZvciB0aGUgdHJhbnNhY3Rpb24uCiBHYXNMaW1pdCB1aW50NjQgYHByb3RvYnVmOiZxdW90O3ZhcmludCw1LG9wdCxuYW1lPWdhcyxwcm90bzMmcXVvdDsganNvbjomcXVvdDtnYXMsb21pdGVtcHR5JnF1b3Q7YAogLy8gaGV4IGZvcm1hdHRlZCBhZGRyZXNzIG9mIHRoZSByZWNpcGllbnQKIFRvIHN0cmluZyBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsNixvcHQsbmFtZT10byxwcm90bzMmcXVvdDsganNvbjomcXVvdDt0byxvbWl0ZW1wdHkmcXVvdDtgCiAvLyB2YWx1ZSBkZWZpbmVzIHRoZSB0aGUgdHJhbnNhY3Rpb24gYW1vdW50LgogQW1vdW50ICpnaXRodWJfY29tX2Nvc21vc19jb3Ntb3Nfc2RrX3R5cGVzLkludCBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsNyxvcHQsbmFtZT12YWx1ZSxwcm90bzMsY3VzdG9tdHlwZT1naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkludCZxdW90OyBqc29uOiZxdW90O3ZhbHVlLG9taXRlbXB0eSZxdW90O2AKIC8vIGlucHV0IGRlZmluZXMgdGhlIGRhdGEgcGF5bG9hZCBieXRlcyBvZiB0aGUgdHJhbnNhY3Rpb24uCiBEYXRhICAgICBbXWJ5dGUgICAgIGBwcm90b2J1ZjomcXVvdDtieXRlcyw4LG9wdCxuYW1lPWRhdGEscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7ZGF0YSxvbWl0ZW1wdHkmcXVvdDtgCiBBY2Nlc3NlcyBBY2Nlc3NMaXN0IGBwcm90b2J1ZjomcXVvdDtieXRlcyw5LHJlcCxuYW1lPWFjY2Vzc2VzLHByb3RvMyxjYXN0cmVwZWF0ZWQ9QWNjZXNzTGlzdCZxdW90OyBqc29uOiZxdW90O2FjY2Vzc0xpc3QmcXVvdDtgCiAvLyB2IGRlZmluZXMgdGhlIHNpZ25hdHVyZSB2YWx1ZQogViBbXWJ5dGUgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEwLG9wdCxuYW1lPXYscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7dixvbWl0ZW1wdHkmcXVvdDtgCiAvLyByIGRlZmluZXMgdGhlIHNpZ25hdHVyZSB2YWx1ZQogUiBbXWJ5dGUgYHByb3RvYnVmOiZxdW90O2J5dGVzLDExLG9wdCxuYW1lPXIscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7cixvbWl0ZW1wdHkmcXVvdDtgCiAvLyBzIGRlZmluZSB0aGUgc2lnbmF0dXJlIHZhbHVlCiBTIFtdYnl0ZSBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMTIsb3B0LG5hbWU9cyxwcm90bzMmcXVvdDsganNvbjomcXVvdDtzLG9taXRlbXB0eSZxdW90O2AKfQo="}}),c._v(" "),e("p",[c._v("This message field validation is expected to fail if:")]),c._v(" "),e("ul",[e("li",[e("code",[c._v("GasTipCap")]),c._v(" is invalid ("),e("code",[c._v("nil")]),c._v(" , negative or overflows int256)")]),c._v(" "),e("li",[e("code",[c._v("GasFeeCap")]),c._v(" is invalid ("),e("code",[c._v("nil")]),c._v(" , negative or overflows int256)")]),c._v(" "),e("li",[e("code",[c._v("GasFeeCap")]),c._v(" is less than "),e("code",[c._v("GasTipCap")])]),c._v(" "),e("li",[e("code",[c._v("Fee")]),c._v(" (gas price * gas limit) is invalid (overflows int256)")]),c._v(" "),e("li",[e("code",[c._v("Amount")]),c._v(" is invalid (negative or overflows int256)")]),c._v(" "),e("li",[e("code",[c._v("To")]),c._v(" address is invalid (non-valid ethereum hex address)")]),c._v(" "),e("li",[e("code",[c._v("ChainID")]),c._v(" is "),e("code",[c._v("nil")])])]),c._v(" "),e("h3",{attrs:{id:"accesslisttx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accesslisttx"}},[c._v("#")]),c._v(" "),e("code",[c._v("AccessListTx")])]),c._v(" "),e("p",[c._v("The transaction data of EIP-2930 access list transactions.")]),c._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBY2Nlc3NMaXN0VHggc3RydWN0IHsKIC8vIGRlc3RpbmF0aW9uIEVWTSBjaGFpbiBJRAogQ2hhaW5JRCAqZ2l0aHViX2NvbV9jb3Ntb3NfY29zbW9zX3Nka190eXBlcy5JbnQgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEsb3B0LG5hbWU9Y2hhaW5faWQsanNvbj1jaGFpbklkLHByb3RvMyxjdXN0b210eXBlPWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuSW50JnF1b3Q7IGpzb246JnF1b3Q7Y2hhaW5JRCZxdW90O2AKIC8vIG5vbmNlIGNvcnJlc3BvbmRzIHRvIHRoZSBhY2NvdW50IG5vbmNlICh0cmFuc2FjdGlvbiBzZXF1ZW5jZSkuCiBOb25jZSB1aW50NjQgYHByb3RvYnVmOiZxdW90O3ZhcmludCwyLG9wdCxuYW1lPW5vbmNlLHByb3RvMyZxdW90OyBqc29uOiZxdW90O25vbmNlLG9taXRlbXB0eSZxdW90O2AKIC8vIGdhcyBwcmljZSBkZWZpbmVzIHRoZSB2YWx1ZSBmb3IgZWFjaCBnYXMgdW5pdAogR2FzUHJpY2UgKmdpdGh1Yl9jb21fY29zbW9zX2Nvc21vc19zZGtfdHlwZXMuSW50IGBwcm90b2J1ZjomcXVvdDtieXRlcywzLG9wdCxuYW1lPWdhc19wcmljZSxqc29uPWdhc1ByaWNlLHByb3RvMyxjdXN0b210eXBlPWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuSW50JnF1b3Q7IGpzb246JnF1b3Q7Z2FzX3ByaWNlLG9taXRlbXB0eSZxdW90O2AKIC8vIGdhcyBkZWZpbmVzIHRoZSBnYXMgbGltaXQgZGVmaW5lZCBmb3IgdGhlIHRyYW5zYWN0aW9uLgogR2FzTGltaXQgdWludDY0IGBwcm90b2J1ZjomcXVvdDt2YXJpbnQsNCxvcHQsbmFtZT1nYXMscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7Z2FzLG9taXRlbXB0eSZxdW90O2AKIC8vIGhleCBmb3JtYXR0ZWQgYWRkcmVzcyBvZiB0aGUgcmVjaXBpZW50CiBUbyBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDUsb3B0LG5hbWU9dG8scHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7dG8sb21pdGVtcHR5JnF1b3Q7YAogLy8gdmFsdWUgZGVmaW5lcyB0aGUgdW5zaWduZWQgaW50ZWdlciB2YWx1ZSBvZiB0aGUgdHJhbnNhY3Rpb24gYW1vdW50LgogQW1vdW50ICpnaXRodWJfY29tX2Nvc21vc19jb3Ntb3Nfc2RrX3R5cGVzLkludCBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsNixvcHQsbmFtZT12YWx1ZSxwcm90bzMsY3VzdG9tdHlwZT1naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkludCZxdW90OyBqc29uOiZxdW90O3ZhbHVlLG9taXRlbXB0eSZxdW90O2AKIC8vIGlucHV0IGRlZmluZXMgdGhlIGRhdGEgcGF5bG9hZCBieXRlcyBvZiB0aGUgdHJhbnNhY3Rpb24uCiBEYXRhICAgICBbXWJ5dGUgICAgIGBwcm90b2J1ZjomcXVvdDtieXRlcyw3LG9wdCxuYW1lPWRhdGEscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7ZGF0YSxvbWl0ZW1wdHkmcXVvdDtgCiBBY2Nlc3NlcyBBY2Nlc3NMaXN0IGBwcm90b2J1ZjomcXVvdDtieXRlcyw4LHJlcCxuYW1lPWFjY2Vzc2VzLHByb3RvMyxjYXN0cmVwZWF0ZWQ9QWNjZXNzTGlzdCZxdW90OyBqc29uOiZxdW90O2FjY2Vzc0xpc3QmcXVvdDtgCiAvLyB2IGRlZmluZXMgdGhlIHNpZ25hdHVyZSB2YWx1ZQogViBbXWJ5dGUgYHByb3RvYnVmOiZxdW90O2J5dGVzLDksb3B0LG5hbWU9dixwcm90bzMmcXVvdDsganNvbjomcXVvdDt2LG9taXRlbXB0eSZxdW90O2AKIC8vIHIgZGVmaW5lcyB0aGUgc2lnbmF0dXJlIHZhbHVlCiBSIFtdYnl0ZSBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMTAsb3B0LG5hbWU9cixwcm90bzMmcXVvdDsganNvbjomcXVvdDtyLG9taXRlbXB0eSZxdW90O2AKIC8vIHMgZGVmaW5lIHRoZSBzaWduYXR1cmUgdmFsdWUKIFMgW11ieXRlIGBwcm90b2J1ZjomcXVvdDtieXRlcywxMSxvcHQsbmFtZT1zLHByb3RvMyZxdW90OyBqc29uOiZxdW90O3Msb21pdGVtcHR5JnF1b3Q7YAp9Cg=="}}),c._v(" "),e("p",[c._v("This message field validation is expected to fail if:")]),c._v(" "),e("ul",[e("li",[e("code",[c._v("GasPrice")]),c._v(" is invalid ("),e("code",[c._v("nil")]),c._v(" , negative or overflows int256)")]),c._v(" "),e("li",[e("code",[c._v("Fee")]),c._v(" (gas price * gas limit) is invalid (overflows int256)")]),c._v(" "),e("li",[e("code",[c._v("Amount")]),c._v(" is invalid (negative or overflows int256)")]),c._v(" "),e("li",[e("code",[c._v("To")]),c._v(" address is invalid (non-valid ethereum hex address)")]),c._v(" "),e("li",[e("code",[c._v("ChainID")]),c._v(" is "),e("code",[c._v("nil")])])])],1)}),[],!1,null,null,null);d.default=l.exports}}]);