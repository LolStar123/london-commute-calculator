import test from 'node:test';
import assert from 'node:assert/strict';
import * as m from './model.mjs';
test('workflow invariants and boundary cases',()=>{
assert.equal(m.cost({days:5,single:6,dailyCap:10,weeklyCap:42,travelcard:45}).payg,42);assert.equal(m.cost({...m.defaults,days:0}).best,0);assert.equal(m.cost({...m.defaults,days:7,travelcard:1}).winner,'weekly Travelcard');assert.throws(()=>m.cost({...m.defaults,days:8}));
});
