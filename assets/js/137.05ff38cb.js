(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{692:function(e,t,r){"use strict";r.r(t);var a=r(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"concepts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),r("p",[e._v("In Proof of Stake (PoS) blockchains, rewards gained from transaction fees are paid to validators. The fee distribution module fairly distributes the rewards to the validators' constituent delegators.")]),e._v(" "),r("p",[e._v("Rewards are calculated per period. The period is updated each time a validator's delegation changes, for example, when the validator receives a new delegation.\nThe rewards for a single validator can then be calculated by taking the total rewards for the period before the delegation started, minus the current total rewards.\nTo learn more, see the "),r("a",{attrs:{href:"/docs/spec/fee_distribution/f1_fee_distr.pdf"}},[e._v("F1 Fee Distribution paper")]),e._v(".")]),e._v(" "),r("p",[e._v("The commission to the validator is paid when the validator is removed or when the validator requests a withdrawal.\nThe commission is calculated and incremented at every "),r("code",[e._v("BeginBlock")]),e._v(" operation to update accumulated fee amounts.")]),e._v(" "),r("p",[e._v("The rewards to a delegator are distributed when the delegation is changed or removed, or a withdrawal is requested.\nBefore rewards are distributed, all slashes to the validator that occurred during the current delegation are applied.")]),e._v(" "),r("h2",{attrs:{id:"reference-counting-in-f1-fee-distribution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reference-counting-in-f1-fee-distribution"}},[e._v("#")]),e._v(" Reference Counting in F1 Fee Distribution")]),e._v(" "),r("p",[e._v("In F1 fee distribution, the rewards a delegator receives are calculated when their delegation is withdrawn. This calculation must read the terms of the summation of rewards divided by the share of tokens from the period which they ended when they delegated, and the final period that was created for the withdrawal.")]),e._v(" "),r("p",[e._v("Additionally, as slashes change the amount of tokens a delegation will have (but we calculate this lazily,\nonly when a delegator un-delegates), we must calculate rewards in separate periods before / after any slashes\nwhich occurred in between when a delegator delegated and when they withdrew their rewards. Thus slashes, like\ndelegations, reference the period which was ended by the slash event.")]),e._v(" "),r("p",[e._v("All stored historical rewards records for periods which are no longer referenced by any delegations\nor any slashes can thus be safely removed, as they will never be read (future delegations and future\nslashes will always reference future periods). This is implemented by tracking a "),r("code",[e._v("ReferenceCount")]),e._v("\nalong with each historical reward storage entry. Each time a new object (delegation or slash)\nis created which might need to reference the historical record, the reference count is incremented.\nEach time one object which previously needed to reference the historical record is deleted, the reference\ncount is decremented. If the reference count hits zero, the historical record is deleted.")])])}),[],!1,null,null,null);t.default=i.exports}}]);