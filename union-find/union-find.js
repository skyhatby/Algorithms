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

        union: function(p, q) {
            // if (this.connected(p, q)) return;
            // var c = this.trackingArray[p];
            // for (var i = 0; i < this.trackingArray.length; i++) {
            //     if (this.trackingArray[i] === c) {
            //         this.trackingArray[i] = this.trackingArray[q];
            //     }
            // }
            var pid = this.trackingArray[p],
            	qid = this.trackingArray[q];

            for (var i = 0; i < this.trackingArray.length; i++) {
            	if (this.trackingArray[i] === pid) {
            		this.trackingArray[i] = qid;
            	}
            }

        },

        connected: function(p, q) {
            return this.trackingArray[p] === this.trackingArray[q];
        }
    };
})(this);
