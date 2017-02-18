import {expect} from 'chai';
import {add} from '../src/add';

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('任何数加0应该等于自身', function() {
    expect(add(1, 0)).to.be.equal(1); 
  });
  it('测试应该5000毫秒后结束', function(done) {
    var x = true;
    var f = function() {
      x = false;
      expect(x).to.be.not.ok;
      done(); // 通知Mocha测试结束
    };
    setTimeout(f, 4000);
  });
});