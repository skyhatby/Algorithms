(function(scope) {
    'use strict';

    scope.UnionFind = function(elementsArray) {
        this.elements = elementsArray;
        this.trackingArray = this.createTrackingArray();
    };

    scope.UnionFind.prototype = {
        createTrackingArray: function() {
            var array = [];
            for (var i = 0; i < this.elements.length; i++) {
                array.push(i);
            }
            return array;
        },

        root: function(i) {
            while (i !== this.trackingArray[i]) {
                i = this.trackingArray[i];
            }
            return i;
        },

        union: function(p, q) {
            // // if (this.connected(p, q)) return;
            // // var c = this.trackingArray[p];
            // // for (var i = 0; i < this.trackingArray.length; i++) {
            // //     if (this.trackingArray[i] === c) {
            // //         this.trackingArray[i] = this.trackingArray[q];
            // //     }
            // // }
            // var pid = this.trackingArray[p],
            // 	qid = this.trackingArray[q];

            // for (var i = 0; i < this.trackingArray.length; i++) {
            // 	if (this.trackingArray[i] === pid) {
            // 		this.trackingArray[i] = qid;
            // 	}
            // }
            var i = this.root(p),
            	j = this.root(q);
            this.trackingArray[i] = j;
        },

        connected: function(p, q) {
            return this.root(p) === this.root(q);
        }
    };
})(this);
