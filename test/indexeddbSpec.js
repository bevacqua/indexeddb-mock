
var idbMock = require('../indexeddb.js');

describe('mock.open', function() { 
	iit('should produce some kind of IDBDatabase mock', function(done) {
		idbMock.reset();
		idbMock.mock.open('somedb', 1).onsuccess = function(ev) {
			expect(ev.target).not.toBe(null);
			
			if (ev.target)
				expect(ev.target.result).not.toBe(null);
			done();
		};
	});
});

