require.d(exports, {
  default: function () {
    return _0x46f881;
  }
});
function _0x62a1b() {
  var _0x2a4c6c = this;
  var _0x214cba = _0x2a4c6c._self._c;
  return _0x214cba("div", {
    class: _0x2a4c6c.curSceneConfig.klass + "-scene"
  }, [_0x214cba(_0x2a4c6c.hyphenate(_0x2a4c6c.curTab.name.replace("Tab", "")), {
    tag: "component",
    attrs: {
      curSceneConfig: _0x2a4c6c.curSceneConfig
    }
  })], 1);
}
var _0x1989b3 = [];
function _0x204752() {
  var _0x5a058b = this;
  var _0x1b4177 = _0x5a058b._self._c;
  return _0x1b4177("div", {
    staticClass: "prestige-item"
  }, [_0x1b4177("div", {
    staticClass: "prestige-detail"
  }, [_0x1b4177("prop-detail", {
    attrs: {
      prop: _0x5a058b.showProp,
      propDetailConfig: {
        left: 266,
        top: 42,
        visable: _0x5a058b.isPropDetail
      }
    }
  }), _0x1b4177("div", {
    staticClass: "prestige-detail__title"
  }, [_0x1b4177("img", {
    attrs: {
      src: require(/*webcrack:missing*/"./83281.js")
    }
  })]), _0x1b4177("div", {
    staticClass: "prestige-detail__context"
  }, [_0x5a058b._m(0), _0x1b4177("ul", {
    class: ["prestige-detail__props", "store-props"]
  }, _0x5a058b._l(_0x5a058b.curStoreProps, function (_0x581a2f) {
    return _0x1b4177("li", {
      key: _0x581a2f.name,
      class: {
        active: _0x5a058b.curStoreProp === _0x581a2f
      },
      on: {
        click: function (_0x31f52d) {
          return _0x5a058b.storePropClick(_0x581a2f);
        },
        mouseenter: function (_0x176648) {
          return _0x5a058b.propMouseEnter(_0x581a2f);
        },
        mouseleave: _0x5a058b.propMouseLeave
      }
    }, [_0x1b4177("div", {
      staticClass: "store-props__name"
    }, [_0x1b4177("img", {
      attrs: {
        src: require(/*webcrack:missing*/"./37702.js")("./" + _0x581a2f.type + ".gif")
      }
    }), _0x5a058b._v(_0x5a058b._s(_0x581a2f.name) + " ")]), _0x1b4177("div", {
      staticClass: "store-props__num"
    }, [_0x5a058b._v(_0x5a058b._s(_0x581a2f.price))])]);
  }), 0)]), _0x1b4177("div", {
    staticClass: "prestige-detail__footer"
  }, [_0x1b4177("div", {
    staticClass: "prestige-detail__input"
  }, [_0x1b4177("div", [_0x5a058b._v("数量：")]), _0x1b4177("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _0x5a058b.formatedStorePropNum,
      expression: "formatedStorePropNum"
    }],
    attrs: {
      type: "number"
    },
    domProps: {
      value: _0x5a058b.formatedStorePropNum
    },
    on: {
      input: function (_0x4c0e27) {
        if (!_0x4c0e27.target.composing) {
          _0x5a058b.formatedStorePropNum = _0x4c0e27.target.value;
        }
      }
    }
  }), _0x1b4177("button", {
    staticClass: "btn--buy",
    on: {
      click: function (_0x286c6d) {
        return _0x5a058b.handleBtnClick("smithyBuy");
      }
    }
  }, [_0x5a058b._v(" 购买 ")])])])], 1), _0x1b4177("div", {
    staticClass: "package-detail"
  }, [_0x1b4177("package-prop-detail", {
    attrs: {
      curSceneConfig: _0x5a058b.curSceneConfig
    },
    model: {
      value: _0x5a058b.curPackageProp,
      callback: function (_0x4ba476) {
        _0x5a058b.curPackageProp = _0x4ba476;
      },
      expression: "curPackageProp"
    }
  })], 1)]);
}
var _0x1563e3 = [function () {
  var _0x425618 = this;
  var _0x58221e = _0x425618._self._c;
  return _0x58221e("ul", {
    staticClass: "prestige-detail__header"
  }, [_0x58221e("li", [_0x425618._v("名称")]), _0x58221e("li", [_0x425618._v("消耗威望")])]);
}];
import * as _0xa3138d from /*webcrack:missing*/"./66848.js";
import * as _0x2cd2fa from /*webcrack:missing*/"./41314.js";
var _0x25d55d = _0x2cd2fa;
import * as _0x562fc1 from /*webcrack:missing*/"./36682.js";
var _0x2c0224 = {
  name: "PrestigeItem",
  props: ["curSceneConfig"],
  data() {
    return {
      showProp: null,
      isPropDetail: false,
      storePropNum: null,
      curStoreProp: null,
      curPackageProp: null
    };
  },
  methods: {
    storePropClick(_0x1810e6) {
      if (this.curStoreProp === _0x1810e6) {
        this.curStoreProp = null;
      } else {
        this.curStoreProp = _0x1810e6;
        this.storePropNum = 1;
      }
    },
    propMouseEnter(_0x4c4dff) {
      this.showProp = _0x4c4dff;
      this.isPropDetail = true;
    },
    propMouseLeave() {
      this.showPorp = null;
      this.isPropDetail = false;
    },
    handleBtnClick(_0x2c76d6) {
      if (_0x2c76d6 === "smithyBuy") {
        new SSPromise((_0x26b873, _0x5c103e) => {
          const {
            curStoreProp: _0x56aa0d,
            storePropNum: _0x4707d0
          } = this;
          if (!_0x56aa0d) {
            _0x5c103e({
              status: "fail",
              message: "购买失败，请先选择您要购买的物品！"
            });
            return;
          }
          if (_0x4707d0 <= 0 || _0x4707d0 > 1000) {
            _0x5c103e({
              status: "fail",
              message: "购买失败，单次购买物品数量限制在 1 - 1000 ！"
            });
            return;
          }
          if (_0x56aa0d.type === "equipment" && _0x4707d0 > 1) {
            _0x5c103e({
              status: "fail",
              message: "装备道具请一件件分开购买。"
            });
            return;
          }
          _0x56aa0d.num = _0x4707d0;
          const _0x544992 = () => {
            this.$store.commit("handleSmithy", {
              handle: _0x2c76d6,
              prop: _0x25d55d(_0x56aa0d),
              resolve: _0x26b873,
              reject: _0x5c103e
            });
          };
          const _0x22efdb = () => {
            _0x5c103e(null);
          };
          this.$gameAlert.openAlert("购买 " + _0x56aa0d.name + " * " + _0x4707d0 + " 共需要 " + _0x56aa0d.price * _0x4707d0 + " 威望，请确认您是否要购买！", {
            confirmHandle: _0x544992,
            cancelHandle: _0x22efdb
          });
        }).then(_0x288e61 => {
          this.$gameMessage.info(_0x288e61.message);
          this.storePropNum = 1;
          this.curStoreProp = null;
        }).catch(_0x2eadfb => {
          if (_0x2eadfb) {
            this.$gameMessage.info(_0x2eadfb.message);
          }
        });
      }
    }
  },
  computed: {
    curStoreProps() {
      return _0x562fc1.rN.find(_0x41e179 => _0x41e179.name === "prestigeItemTab")?.props;
    },
    formatedStorePropNum: {
      get() {
        const _0x242f9e = _0xa3138d.Ay.filter("formatPropNum");
        return _0x242f9e(this.storePropNum);
      },
      set(_0x14eebb) {
        this.storePropNum = Number(_0x14eebb);
      }
    }
  }
};
var _0x3f91d6 = _0x2c0224;
import * as _0x191cac from /*webcrack:missing*/"./81656.js";
var _0x2253d6 = (0, _0x191cac.A)(_0x3f91d6, _0x204752, _0x1563e3, false, null, null, null);
var _0x219d78 = _0x2253d6.exports;
function _0xc49211() {
  var _0x5e28ab = this;
  var _0x41bda9 = _0x5e28ab._self._c;
  return _0x41bda9("div", {
    staticClass: "combination-inlaying"
  }, [_0x41bda9("prop-detail", {
    attrs: {
      prop: _0x5e28ab.showProp,
      propDetailConfig: _0x5e28ab.propDetailConfig
    }
  }), _0x41bda9("div", {
    staticClass: "combination-inlaying__context"
  }, [_0x41bda9("ul", {
    staticClass: "furnace-items"
  }, _0x5e28ab._l(2, function (_0x228a7f) {
    return _0x41bda9("li", {
      key: _0x228a7f,
      staticClass: "furnace-item"
    }, [_0x5e28ab.furnaceProps[_0x228a7f - 1] ? [_0x41bda9("img", {
      attrs: {
        src: require(/*webcrack:missing*/"./10427.js")("./" + _0x5e28ab.furnaceProps[_0x228a7f - 1].type + "/" + _0x5e28ab.furnaceProps[_0x228a7f - 1].img + ".gif")
      },
      on: {
        dblclick: function (_0x4c5eb4) {
          return _0x5e28ab.handleDblClick(_0x228a7f - 1);
        },
        mouseenter: function (_0xb870bd) {
          return _0x5e28ab.propMouseEnter(_0x5e28ab.furnaceProps[_0x228a7f - 1], "furnace-" + _0x228a7f);
        },
        mouseleave: _0x5e28ab.propMouseLeave
      }
    })] : _0x5e28ab._e()], 2);
  }), 0), _0x5e28ab.combinationBtnShow ? _0x41bda9("button", {
    staticClass: "btn--combination",
    on: {
      click: function (_0x5e35d9) {
        return _0x5e28ab.handleBtnClick("combine");
      }
    }
  }, [_0x5e28ab._v(" 合成 ")]) : _0x5e28ab._e(), _0x5e28ab._m(0)]), _0x41bda9("div", {
    staticClass: "combination-inlaying__package package-prop"
  }, [_0x41bda9("div", {
    staticClass: "package-prop__title"
  }, [_0x41bda9("img", {
    attrs: {
      src: require(/*webcrack:missing*/"./7832.js")
    }
  })]), _0x41bda9("div", {
    staticClass: "package-prop__context"
  }, [_0x5e28ab._m(1), _0x41bda9("ul", {
    staticClass: "context__props"
  }, _0x5e28ab._l(_0x5e28ab.legalProps.filter(_0x26f812 => _0x26f812 !== null), function (_0x5b7882) {
    return _0x41bda9("li", {
      key: _0x5b7882.rand,
      class: {
        active: _0x5e28ab.curPackageProp?.rand === _0x5b7882.rand
      },
      on: {
        mouseenter: function (_0x3f0dd9) {
          return _0x5e28ab.propMouseEnter(_0x5b7882, "package");
        },
        mouseleave: _0x5e28ab.propMouseLeave,
        click: function (_0x41613f) {
          return _0x5e28ab.packagePropClick(_0x5b7882);
        }
      }
    }, [_0x41bda9("div", {
      staticClass: "package-prop__name"
    }, [_0x41bda9("img", {
      attrs: {
        src: require(/*webcrack:missing*/"./37702.js")("./" + _0x5b7882.type + ".gif")
      }
    }), _0x5e28ab._v(_0x5e28ab._s(_0x5b7882.name) + " ")]), _0x41bda9("div", {
      staticClass: "package-prop__num"
    }, [_0x5e28ab._v(_0x5e28ab._s(_0x5b7882.num))])]);
  }), 0)]), _0x41bda9("div", {
    staticClass: "package-prop__footer"
  }, [_0x41bda9("button", {
    staticClass: "btn--add-prop",
    on: {
      click: function (_0x43dcd5) {
        return _0x5e28ab.handleBtnClick("add");
      }
    }
  }, [_0x5e28ab._v(" 添加物品 ")]), _0x41bda9("button", {
    staticClass: "btn--sort-prop",
    on: {
      click: function (_0x4330fe) {
        return _0x5e28ab.handleBtnClick("sort");
      }
    }
  }, [_0x5e28ab._v(" 整理背包 ")])])])], 1);
}
var _0x48e8b5 = [function () {
  var _0x58d1fb = this;
  var _0xcae991 = _0x58d1fb._self._c;
  return _0xcae991("ul", {
    staticClass: "furnace-tips"
  }, [_0xcae991("li", [_0x58d1fb._v("1.从右侧背包中加入你要合成/镶嵌的道具。")]), _0xcae991("li", [_0x58d1fb._v("2.双击已加入的道具进行取下操作。")])]);
}, function () {
  var _0x288437 = this;
  var _0x3dac96 = _0x288437._self._c;
  return _0x3dac96("ul", {
    staticClass: "context__header"
  }, [_0x3dac96("li", [_0x288437._v("名称")]), _0x3dac96("li", [_0x288437._v("数量")])]);
}];
require(/*webcrack:missing*/"./28743.js");
import * as _0x46d8ea from /*webcrack:missing*/"./72321.js";
function _0x33ae4f(_0x176c0d) {
  const _0x486026 = _0x562fc1.MT.find(_0x28f014 => _0x28f014.name === _0x176c0d).next;
  let _0x50c563 = _0x562fc1.uP.find(_0x281be1 => _0x281be1.name === _0x486026);
  _0x50c563 = _0x25d55d(_0x50c563);
  _0x50c563.num = 1;
  return _0x50c563;
}
var _0xed7192 = {
  name: "CombinationInlaying",
  props: ["curSceneConfig"],
  data() {
    return {
      legalProps: null,
      showProp: null,
      isPropDetail: false,
      curPackageProp: null,
      furnaceProps: [null, null],
      showPropType: null
    };
  },
  methods: {
    propMouseEnter(_0x1ffdec, _0x565362) {
      this.showPropType = _0x565362;
      this.showProp = _0x1ffdec;
      this.isPropDetail = true;
    },
    propMouseLeave() {
      this.showPropType = null;
      this.showProp = null;
      this.isPropDetail = false;
    },
    packagePropClick(_0x49851a) {
      if (this.curPackageProp?.rand === _0x49851a.rand) {
        this.curPackageProp = null;
      } else {
        this.curPackageProp = _0x49851a;
      }
    },
    handleDblClick(_0x47e323) {
      const _0x37f733 = this.furnaceProps[_0x47e323];
      const _0x50e07d = this.legalProps.find(_0x522d38 => _0x522d38?.rand === this.furnaceProps[_0x47e323].rand);
      if (_0x50e07d) {
        _0x50e07d.num++;
      } else {
        this.legalProps.push(_0x37f733);
      }
      this.furnaceProps.splice(_0x47e323, 1, null);
      this.propMouseLeave();
    },
    handleAddProp() {
      if (!this.curPackageProp) {
        this.$gameMessage.info("请先在背包中选中你要合成/镶嵌的道具。");
        return;
      }
      if (this.furnaceProps.filter(_0x33ffe7 => !!_0x33ffe7).length >= 2) {
        this.$gameMessage.info("无法加入更多道具，请先取出。");
        return;
      }
      const _0x18c1a2 = _0x25d55d(this.curPackageProp);
      _0x18c1a2.num = 1;
      const _0x23f868 = this.furnaceProps.findIndex(_0xac916d => _0xac916d === null);
      this.furnaceProps.splice(_0x23f868, 1, _0x18c1a2);
      const _0x5d155c = this.legalProps.findIndex(_0x2a7836 => _0x2a7836?.rand === _0x18c1a2.rand);
      if (this.curPackageProp.num === 1) {
        this.legalProps.splice(_0x5d155c, 1);
        this.curPackageProp = null;
      } else {
        this.curPackageProp.num--;
      }
    },
    handleCombine() {
      if (!this.throttle) {
        this.throttle = true;
        new SSPromise((_0x2c3b43, _0x44e902) => {
          if (this.packageProps.length >= this.packageCapacity) {
            _0x44e902({
              status: "fail",
              message: "您的背包已满，请先清理出足够空间吧！"
            });
          } else if (this.furnaceProps.find(_0x2b1e64 => _0x2b1e64.name === "十星龙珠")) {
            _0x44e902({
              status: "fail",
              message: "十星龙珠已经为最高等级龙珠了，无法再进行合成操作！"
            });
          } else if (this.furnaceProps[0].name === this.furnaceProps[1].name) {
            this.$store.commit("playerModule/changePackageProps", {
              handle: "reduce",
              props: [this.furnaceProps[0]],
              num: 2,
              resolve: _0x2c3b43,
              reject: _0x44e902
            });
          } else {
            _0x44e902({
              status: "fail",
              message: "只有两颗相同等级的龙珠才能合成！"
            });
          }
        }).then(() => {
          let _0x5573e1 = null;
          if (this.curPackageProp && this.curPackageProp.name === this.furnaceProps[0].name) {
            _0x5573e1 = this.curPackageProp.name;
          }
          const _0x36475b = () => {
            if (!_0x5573e1) {
              return;
            }
            const _0x583c1b = this;
            setTimeout(() => {
              _0x583c1b.curPackageProp = _0x583c1b.legalProps.find(_0x599fc5 => _0x599fc5.name === _0x5573e1 && _0x599fc5.num >= 2);
              if (_0x583c1b.curPackageProp) {
                _0x583c1b.handleAddProp();
                _0x583c1b.handleAddProp();
              }
            }, 0);
          };
          const _0x224b02 = _0x33ae4f(this.furnaceProps[0].name);
          this.$store.commit("playerModule/changePackageProps", {
            handle: "add",
            props: [_0x224b02],
            resolve: _0x36475b,
            reject: _0x46d8ea.lQ
          });
          this.furnaceProps = [null, null];
          this.$gameMessage.info("合成成功：你获得一颗" + _0x224b02.name + "!");
        }).catch(_0x338623 => {
          this.$gameMessage.info(_0x338623.message);
        }).finally(() => {
          this.throttle = false;
        });
      }
    },
    handleSortPackageProps() {
      new SSPromise((_0x157c1a, _0x179410) => {
        this.$store.commit("playerModule/sortPlayerProps", {
          handle: "package",
          resolve: _0x157c1a,
          reject: _0x179410
        });
      }).then(_0x1d7694 => {
        document.querySelector(".context__props").scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
        this.$gameMessage.info(_0x1d7694.message);
      });
    },
    handleBtnClick(_0x538ead) {
      switch (_0x538ead) {
        case "add":
          this.handleAddProp();
          break;
        case "sort":
          this.handleSortPackageProps();
          break;
        case "combine":
          this.handleCombine();
          break;
        default:
          this.$gameMessage.info("无效操作！");
      }
    },
    handleSortFurnaceProps() {
      for (let _0xb2c24f = 0; _0xb2c24f < this.furnaceProps.length; _0xb2c24f++) {
        const _0x8188f8 = this.furnaceProps[_0xb2c24f];
        if (!_0x8188f8) {
          continue;
        }
        const _0x257dd2 = this.legalProps.findIndex(_0x66dc1d => _0x66dc1d?.rand === _0x8188f8.rand);
        const _0x387d97 = this.legalProps[_0x257dd2];
        if (!_0x387d97) {
          this.furnaceProps.splice(_0xb2c24f, 1, null);
        }
      }
      this.$nextTick(() => {
        for (let _0xae3f7e = 0; _0xae3f7e < this.furnaceProps.length; _0xae3f7e++) {
          const _0x2baaea = this.furnaceProps[_0xae3f7e];
          if (!_0x2baaea) {
            continue;
          }
          const _0x54edbc = this.legalProps.findIndex(_0x4f6afa => _0x4f6afa?.rand === _0x2baaea.rand);
          const _0x47dde9 = this.legalProps[_0x54edbc];
          if (_0x47dde9.num === 1) {
            this.legalProps.splice(_0x54edbc, 1, null);
          } else {
            _0x47dde9.num--;
            this.legalProps.splice(_0x54edbc, 1, _0x47dde9);
          }
        }
      });
    }
  },
  computed: {
    propDetailConfig() {
      let _0x5c1edd;
      let _0x423485;
      switch (this.showPropType) {
        case "package":
          _0x5c1edd = 276;
          _0x423485 = 66;
          break;
        case "furnace-1":
          _0x5c1edd = 40;
          _0x423485 = 80;
          break;
        case "furnace-2":
          _0x5c1edd = 152;
          _0x423485 = 80;
          break;
        default:
          _0x5c1edd = 0;
          _0x423485 = 0;
      }
      return {
        left: _0x5c1edd,
        top: _0x423485,
        visable: this.isPropDetail
      };
    },
    packageProps() {
      return this.$store.state.playerModule.packageDetail.packageProps;
    },
    combinationBtnShow() {
      return this.furnaceProps.filter(_0x4dbd76 => _0x4dbd76 && ["enhancement"].includes(_0x4dbd76.type)).length === 2;
    },
    packageCapacity() {
      return this.$store.state.playerModule.packageDetail.maxCapacity;
    }
  },
  watch: {
    packageProps: {
      handler(_0x12cc31) {
        let _0x5c7935 = _0x12cc31.filter(_0x2006a5 => ["enhancement"].includes(_0x2006a5.type));
        _0x5c7935 = _0x25d55d(_0x5c7935);
        this.legalProps = _0x5c7935;
        this.handleSortFurnaceProps();
        this.curPackageProp = null;
      },
      immediate: true
    }
  }
};
var _0x1c4ea9 = _0xed7192;
var _0x1b222a = (0, _0x191cac.A)(_0x1c4ea9, _0xc49211, _0x48e8b5, false, null, null, null);
var _0x2f6afe = _0x1b222a.exports;
function _0x140aae() {
  var _0x69e88a = this;
  var _0x2e2c4b = _0x69e88a._self._c;
  return _0x2e2c4b("div", {
    staticClass: "equipment-enhancement"
  }, [_0x2e2c4b("prop-detail", {
    attrs: {
      prop: _0x69e88a.showProp,
      propDetailConfig: _0x69e88a.propDetailConfig
    }
  }), _0x2e2c4b("div", {
    staticClass: "equipment-enhancement__context"
  }, [_0x2e2c4b("ul", {
    staticClass: "furnace-items"
  }, _0x69e88a._l(2, function (_0x5ca577) {
    return _0x2e2c4b("li", {
      key: _0x5ca577,
      staticClass: "furnace-item"
    }, [_0x69e88a.furnaceProps[_0x5ca577 - 1] ? [_0x2e2c4b("img", {
      attrs: {
        src: require(/*webcrack:missing*/"./10427.js")("./" + _0x69e88a.furnaceProps[_0x5ca577 - 1].type + "/" + _0x69e88a.furnaceProps[_0x5ca577 - 1].img + ".gif")
      },
      on: {
        dblclick: function (_0x5f1930) {
          return _0x69e88a.handleDblClick(_0x5ca577 - 1);
        },
        mouseenter: function (_0x14ca48) {
          return _0x69e88a.propMouseEnter(_0x69e88a.furnaceProps[_0x5ca577 - 1], "furnace-" + _0x5ca577);
        },
        mouseleave: _0x69e88a.propMouseLeave
      }
    })] : _0x2e2c4b("div", [_0x69e88a._v(" " + _0x69e88a._s(_0x5ca577 === 1 ? "装备" : "龙珠") + " ")])], 2);
  }), 0), _0x69e88a.enhancementBtnShow ? _0x2e2c4b("button", {
    staticClass: "btn--enhancement",
    on: {
      click: function (_0x3c6f8a) {
        return _0x69e88a.handleBtnClick("enhance");
      }
    }
  }, [_0x69e88a._v(" 强化 ")]) : _0x69e88a._e(), _0x69e88a._m(0)]), _0x2e2c4b("div", {
    staticClass: "equipment-enhancement__package package-prop"
  }, [_0x2e2c4b("div", {
    staticClass: "package-prop__title"
  }, [_0x2e2c4b("img", {
    attrs: {
      src: require(/*webcrack:missing*/"./7832.js")
    }
  })]), _0x2e2c4b("div", {
    staticClass: "package-prop__context"
  }, [_0x69e88a._m(1), _0x2e2c4b("ul", {
    staticClass: "context__props"
  }, _0x69e88a._l(_0x69e88a.legalProps.filter(_0x308331 => _0x308331 !== null), function (_0x368931) {
    return _0x2e2c4b("li", {
      key: _0x368931.rand,
      class: {
        active: _0x69e88a.curPackageProp?.rand === _0x368931.rand
      },
      on: {
        mouseenter: function (_0x1eb372) {
          return _0x69e88a.propMouseEnter(_0x368931, "pacakge");
        },
        mouseleave: _0x69e88a.propMouseLeave,
        click: function (_0x67f65d) {
          return _0x69e88a.packagePropClick(_0x368931);
        }
      }
    }, [_0x2e2c4b("div", {
      staticClass: "package-prop__name"
    }, [_0x2e2c4b("img", {
      attrs: {
        src: require(/*webcrack:missing*/"./37702.js")("./" + _0x368931.type + ".gif")
      }
    }), _0x69e88a._v(_0x69e88a._s(_0x368931.name) + " ")]), _0x2e2c4b("div", {
      staticClass: "package-prop__num"
    }, [_0x69e88a._v(_0x69e88a._s(_0x368931.num))])]);
  }), 0)]), _0x2e2c4b("div", {
    staticClass: "package-prop__footer"
  }, [_0x2e2c4b("button", {
    staticClass: "btn--add-prop",
    on: {
      click: function (_0x1d70a6) {
        return _0x69e88a.handleBtnClick("add");
      }
    }
  }, [_0x69e88a._v(" 添加物品 ")]), _0x2e2c4b("button", {
    staticClass: "btn--sort-prop",
    on: {
      click: function (_0x17f622) {
        return _0x69e88a.handleBtnClick("sort");
      }
    }
  }, [_0x69e88a._v(" 整理背包 ")])])])], 1);
}
var _0x2f7e7a = [function () {
  var _0x2cd565 = this;
  var _0x184234 = _0x2cd565._self._c;
  return _0x184234("ul", {
    staticClass: "furnace-tips"
  }, [_0x184234("li", [_0x2cd565._v("1.从右侧背包中加入用于强化的道具。")]), _0x184234("li", [_0x2cd565._v("2.双击已加入的道具进行取下操作。")])]);
}, function () {
  var _0x2855f0 = this;
  var _0x304773 = _0x2855f0._self._c;
  return _0x304773("ul", {
    staticClass: "context__header"
  }, [_0x304773("li", [_0x2855f0._v("名称")]), _0x304773("li", [_0x2855f0._v("数量")])]);
}];
var _0x356585 = {
  name: "EquipmentEnhancement",
  props: ["curSceneConfig"],
  data() {
    return {
      legalProps: null,
      furnaceProps: [null, null],
      curPackageProp: null,
      showPropType: "",
      showProp: null,
      isPropDetail: false
    };
  },
  methods: {
    propMouseEnter(_0x5199f2, _0x367855) {
      this.showPropType = _0x367855;
      this.showProp = _0x5199f2;
      this.isPropDetail = true;
    },
    propMouseLeave() {
      this.showPropType = null;
      this.showProp = null;
      this.isPropDetail = false;
    },
    packagePropClick(_0x1a34e5) {
      if (this.curPackageProp?.rand === _0x1a34e5.rand) {
        this.curPackageProp = null;
      } else {
        this.curPackageProp = _0x1a34e5;
      }
    },
    handleDblClick(_0x1a165b) {
      const _0x3f5ace = this.furnaceProps[_0x1a165b];
      const _0x149f7d = this.legalProps.find(_0x1be89f => _0x1be89f?.rand === this.furnaceProps[_0x1a165b].rand);
      if (_0x149f7d) {
        _0x149f7d.num++;
      } else {
        this.legalProps.push(_0x3f5ace);
      }
      this.furnaceProps.splice(_0x1a165b, 1, null);
      this.propMouseLeave();
      const _0x517eb5 = document.querySelector(".context__props");
      this.$nextTick(() => {
        _0x517eb5.scrollTo({
          top: _0x517eb5.scrollHeight,
          left: 0,
          behavior: "instant"
        });
      });
    },
    handleAddProp() {
      if (!this.curPackageProp) {
        this.$gameMessage.info("请先在背包中选中你要用于强化的道具。");
        return;
      }
      let _0x5a2709 = this.curPackageProp.type === "equipment" ? 0 : 1;
      const _0x189699 = this.furnaceProps[_0x5a2709];
      if (_0x189699) {
        const _0x58ddb5 = this.legalProps.findIndex(_0x346ee5 => _0x346ee5?.rand === _0x189699.rand);
        if (_0x58ddb5 === -1) {
          this.legalProps.push(_0x189699);
        } else {
          this.legalProps[_0x58ddb5].num++;
        }
      }
      const _0x58e50c = _0x25d55d(this.curPackageProp);
      _0x58e50c.num = 1;
      const _0x5ed904 = this.legalProps.findIndex(_0x369144 => _0x369144?.rand === _0x58e50c.rand);
      if (this.curPackageProp.num === 1) {
        this.legalProps.splice(_0x5ed904, 1);
      } else {
        this.curPackageProp.num--;
      }
      this.furnaceProps.splice(_0x5a2709, 1, _0x58e50c);
      this.curPackageProp = null;
    },
    handleEnhance() {
      if (this.furnaceProps[0].type === "equipment" && this.furnaceProps[1].type === "enhancement") {
        if (!this.throttle) {
          this.throttle = true;
          new SSPromise((_0x2221cc, _0x2e7f6e) => {
            const _0x45b53a = this.furnaceProps[0].enhancementLevel || 0;
            if (_0x45b53a >= 10) {
              _0x2e7f6e({
                status: "fail",
                message: "强化失败：你的" + this.furnaceProps[0].name + "已经强化至满级，无法再进一步强化了！"
              });
              return;
            }
            const _0x26e1be = _0x562fc1.MT.find(_0xddd9db => _0xddd9db.name === this.furnaceProps[1].name).limit;
            if (_0x45b53a >= _0x26e1be) {
              _0x2e7f6e({
                status: "fail",
                message: "强化失败：你的" + this.furnaceProps[0].name + "强化等级过高，请选用更高级的龙珠吧！"
              });
            } else {
              this.$store.commit("playerModule/changePackageProps", {
                handle: "reduce",
                props: [this.furnaceProps[1]],
                num: 1,
                resolve: _0x2221cc,
                reject: _0x2e7f6e
              });
            }
          }).then(() => {
            this.enhanceEquipment();
            this.handleBtnClick("sort");
            this.$gameMessage.info("强化成功：您的" + this.furnaceProps[0].name + "属性加成再上一个台阶！");
            this.furnaceProps = [null, null];
          }).catch(_0x207db9 => {
            this.$gameMessage.info(_0x207db9.message);
          }).finally(() => {
            this.throttle = false;
          });
        }
      }
    },
    handleSortPackageProps() {
      new SSPromise((_0x2356db, _0x4e999d) => {
        this.$store.commit("playerModule/sortPlayerProps", {
          handle: "package",
          resolve: _0x2356db,
          reject: _0x4e999d
        });
      }).then(_0x43e021 => {
        document.querySelector(".context__props").scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
        this.$gameMessage.info(_0x43e021.message);
      });
    },
    handleBtnClick(_0x4cce23) {
      switch (_0x4cce23) {
        case "add":
          this.handleAddProp();
          break;
        case "sort":
          this.handleSortPackageProps();
          break;
        case "enhance":
          this.handleEnhance();
          break;
        default:
          this.$gameMessage.info("无效操作！");
      }
    },
    handleSortFurnaceProps() {
      for (let _0x5f5871 = 0; _0x5f5871 < this.furnaceProps.length; _0x5f5871++) {
        const _0x33f77f = this.furnaceProps[_0x5f5871];
        if (!_0x33f77f) {
          continue;
        }
        const _0x21a8ce = this.legalProps.findIndex(_0x17d8a8 => _0x17d8a8?.rand === _0x33f77f.rand);
        const _0x359dc3 = this.legalProps[_0x21a8ce];
        if (!_0x359dc3) {
          this.furnaceProps.splice(_0x5f5871, 1, null);
        }
      }
      this.$nextTick(() => {
        for (let _0x3d9be0 = 0; _0x3d9be0 < this.furnaceProps.length; _0x3d9be0++) {
          const _0x5c9996 = this.furnaceProps[_0x3d9be0];
          if (!_0x5c9996) {
            continue;
          }
          const _0x1f8e5c = this.legalProps.findIndex(_0x8f0798 => _0x8f0798?.rand === _0x5c9996.rand);
          const _0x301c9d = this.legalProps[_0x1f8e5c];
          if (_0x301c9d.num === 1) {
            this.legalProps.splice(_0x1f8e5c, 1, null);
          } else {
            _0x301c9d.num--;
            this.legalProps.splice(_0x1f8e5c, 1, _0x301c9d);
          }
        }
      });
    },
    enhanceEquipment() {
      const _0x56288b = this.packageProps.find(_0x45336d => _0x45336d.rand === this.furnaceProps[0].rand);
      _0x56288b.enhancementLevel ||= 0;
      let _0x159162;
      let _0x2e98a6 = _0x56288b.effects[0].split(":");
      switch (_0x2e98a6[0]) {
        case "maxHp":
          _0x159162 = 30;
          break;
        case "maxMp":
          _0x159162 = 12;
          break;
        case "atk":
          _0x159162 = 8;
          break;
        case "def":
          _0x159162 = 6;
          break;
        case "spd":
          _0x159162 = 3;
          break;
        default:
          throw new Error("强化失败：没有找到该属性详情！");
      }
      _0x2e98a6[1] = Number(_0x2e98a6[1]) + _0x159162;
      let _0x1cdb51 = _0x56288b.description[1].replace(/\d+/, _0x2e98a6[1]);
      _0x56288b.effects[0] = _0x2e98a6.join(":");
      _0x56288b.description[1] = _0x1cdb51;
      _0x56288b.enhancementLevel++;
    }
  },
  computed: {
    propDetailConfig() {
      let _0x3ea37f;
      let _0x1eccee;
      switch (this.showPropType) {
        case "pacakge":
          _0x3ea37f = 276;
          _0x1eccee = 66;
          break;
        case "furnace-1":
          _0x3ea37f = 40;
          _0x1eccee = 80;
          break;
        case "furnace-2":
          _0x3ea37f = 152;
          _0x1eccee = 80;
          break;
        default:
          _0x3ea37f = 0;
          _0x1eccee = 0;
      }
      return {
        left: _0x3ea37f,
        top: _0x1eccee,
        visable: this.isPropDetail
      };
    },
    packageProps() {
      return this.$store.state.playerModule.packageDetail.packageProps;
    },
    enhancementBtnShow() {
      const _0x15755b = this.furnaceProps.findIndex(_0xdc2634 => _0xdc2634 === null);
      return _0x15755b === -1;
    }
  },
  watch: {
    packageProps: {
      handler(_0x2ee669) {
        let _0xec316a = _0x2ee669.filter(_0x54fc61 => ["enhancement", "equipment"].includes(_0x54fc61.type));
        _0xec316a = _0x25d55d(_0xec316a);
        this.legalProps = _0xec316a;
        this.handleSortFurnaceProps();
        this.curPackageProp = null;
      },
      immediate: true
    }
  }
};
var _0x54e800 = _0x356585;
var _0x3ec161 = (0, _0x191cac.A)(_0x54e800, _0x140aae, _0x2f7e7a, false, null, null, null);
var _0x1ca04f = _0x3ec161.exports;
function _0x7663bc() {
  var _0x3a42a9 = this;
  var _0x332d53 = _0x3a42a9._self._c;
  return _0x332d53("div", {
    staticClass: "decomposition"
  }, [_0x332d53("prop-detail", {
    attrs: {
      prop: _0x3a42a9.showProp,
      propDetailConfig: _0x3a42a9.propDetailConfig
    }
  }), _0x332d53("div", {
    staticClass: "decomposition__context"
  }, [_0x332d53("div", {
    staticClass: "furnace-item"
  }, [_0x3a42a9.furnaceProp ? [_0x332d53("img", {
    attrs: {
      src: require(/*webcrack:missing*/"./10427.js")("./" + _0x3a42a9.furnaceProp.type + "/" + _0x3a42a9.furnaceProp.img + ".gif")
    },
    on: {
      dblclick: _0x3a42a9.handleDblClick,
      mouseenter: function (_0x2e71af) {
        return _0x3a42a9.propMouseEnter(_0x3a42a9.furnaceProp, "furnace");
      },
      mouseleave: _0x3a42a9.propMouseLeave
    }
  })] : _0x3a42a9._e()], 2), _0x3a42a9.furnaceProp ? _0x332d53("button", {
    staticClass: "btn--decomposition",
    on: {
      click: function (_0x365d37) {
        return _0x3a42a9.handleBtnClick("decompose");
      }
    }
  }, [_0x3a42a9._v(" 分解 ")]) : _0x3a42a9._e(), _0x3a42a9._m(0)]), _0x332d53("div", {
    staticClass: "decomposition__package package-prop"
  }, [_0x332d53("div", {
    staticClass: "package-prop__title"
  }, [_0x332d53("img", {
    attrs: {
      src: require(/*webcrack:missing*/"./7832.js")
    }
  })]), _0x332d53("div", {
    staticClass: "package-prop__context"
  }, [_0x3a42a9._m(1), _0x332d53("ul", {
    staticClass: "context__props"
  }, _0x3a42a9._l(_0x3a42a9.legalProps.filter(_0xa08002 => _0xa08002 !== null), function (_0x1a0f03) {
    return _0x332d53("li", {
      key: _0x1a0f03.rand,
      class: {
        active: _0x3a42a9.curPackageProp?.rand === _0x1a0f03.rand
      },
      on: {
        mouseenter: function (_0x356eda) {
          return _0x3a42a9.propMouseEnter(_0x1a0f03, "pacakge");
        },
        mouseleave: _0x3a42a9.propMouseLeave,
        click: function (_0x55b407) {
          return _0x3a42a9.packagePropClick(_0x1a0f03);
        }
      }
    }, [_0x332d53("div", {
      staticClass: "package-prop__name"
    }, [_0x332d53("img", {
      attrs: {
        src: require(/*webcrack:missing*/"./37702.js")("./" + _0x1a0f03.type + ".gif")
      }
    }), _0x3a42a9._v(_0x3a42a9._s(_0x1a0f03.name) + " ")]), _0x332d53("div", {
      staticClass: "package-prop__num"
    }, [_0x3a42a9._v(_0x3a42a9._s(_0x1a0f03.num))])]);
  }), 0)]), _0x332d53("div", {
    staticClass: "package-prop__footer"
  }, [_0x332d53("button", {
    staticClass: "btn--add-prop",
    on: {
      click: function (_0x687de1) {
        return _0x3a42a9.handleBtnClick("add");
      }
    }
  }, [_0x3a42a9._v(" 添加物品 ")]), _0x332d53("button", {
    staticClass: "btn--sort-prop",
    on: {
      click: function (_0xd64afd) {
        return _0x3a42a9.handleBtnClick("sort");
      }
    }
  }, [_0x3a42a9._v(" 整理背包 ")])])])], 1);
}
var _0x30619d = [function () {
  var _0x4accd1 = this;
  var _0x103a0b = _0x4accd1._self._c;
  return _0x103a0b("ul", {
    staticClass: "furnace-tips"
  }, [_0x103a0b("li", [_0x4accd1._v("1.从右侧背包中加入你要分解的装备。")]), _0x103a0b("li", [_0x4accd1._v("2.双击已加入的装备进行取下操作。")])]);
}, function () {
  var _0x2f06a8 = this;
  var _0x65a12c = _0x2f06a8._self._c;
  return _0x65a12c("ul", {
    staticClass: "context__header"
  }, [_0x65a12c("li", [_0x2f06a8._v("名称")]), _0x65a12c("li", [_0x2f06a8._v("数量")])]);
}];
var _0x1c9f67 = {
  name: "Decomposition",
  props: ["curSceneConfig"],
  data() {
    return {
      legalProps: null,
      showProp: null,
      isPropDetail: false,
      curPackageProp: null,
      showPropType: null,
      furnaceProp: null
    };
  },
  methods: {
    propMouseEnter(_0x1963c3, _0x2f6b6b) {
      this.showPropType = _0x2f6b6b;
      this.showProp = _0x1963c3;
      this.isPropDetail = true;
    },
    propMouseLeave() {
      this.showPropType = null;
      this.showProp = null;
      this.isPropDetail = false;
    },
    packagePropClick(_0x5a15b6) {
      if (this.curPackageProp?.rand === _0x5a15b6.rand) {
        this.curPackageProp = null;
      } else {
        this.curPackageProp = _0x5a15b6;
      }
    },
    handleDblClick() {
      this.legalProps.push(this.furnaceProp);
      this.furnaceProp = null;
      this.propMouseLeave();
    },
    handleAddProp() {
      if (!this.curPackageProp) {
        this.$gameMessage.info("请先在背包中选中你要分解的装备。");
        return;
      }
      if (this.curPackageProp.type === "fragment") {
        this.$gameMessage.info("只有装备道具才可以被分解噢。");
        return;
      }
      if (this.furnaceProp) {
        this.$gameMessage.info("一次只能分解一个装备，请先双击取出已添加装备。");
        return;
      }
      const _0x1b880c = _0x25d55d(this.curPackageProp);
      if (!this.furnaceProp) {
        this.furnaceProp = _0x1b880c;
      }
      const _0x422aa2 = this.legalProps.findIndex(_0x152e5e => _0x152e5e.rand === _0x1b880c.rand);
      this.legalProps.splice(_0x422aa2, 1);
      this.curPackageProp = null;
    },
    handleSortPackageProps() {
      new SSPromise((_0x361b9a, _0x5572bd) => {
        this.$store.commit("playerModule/sortPlayerProps", {
          handle: "package",
          resolve: _0x361b9a,
          reject: _0x5572bd
        });
      }).then(_0xbda07e => {
        document.querySelector(".context__props").scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
        this.$gameMessage.info(_0xbda07e.message);
      });
    },
    handleDecompose() {
      if (!this.furnaceProp) {
        return;
      }
      if (this.throttle) {
        return;
      }
      let _0x33b786;
      this.throttle = true;
      new SSPromise((_0x50b166, _0x15f322) => {
        if (this.packageProps.length >= this.packageCapacity) {
          _0x15f322({
            status: "fail",
            message: "您的背包已满，请先清理出足够空间吧！"
          });
        } else {
          for (let _0x260588 of _0x562fc1.IU) {
            if (this.furnaceProp.img >= _0x260588.img[0] && this.furnaceProp.img <= _0x260588.img[1]) {
              _0x33b786 = _0x260588.result;
              break;
            }
          }
          if (_0x33b786) {
            this.$store.commit("playerModule/changePackageProps", {
              handle: "reduce",
              props: [this.furnaceProp],
              num: 1,
              resolve: _0x50b166,
              reject: _0x15f322
            });
          } else {
            _0x15f322({
              status: "fail",
              message: this.furnaceProp.name + "无法被分解成装备碎片噢。"
            });
          }
        }
      }).then(() => {
        const _0x4a9b65 = _0x25d55d(_0x562fc1.uP.find(_0x1f46fd => _0x1f46fd.name === _0x33b786));
        _0x4a9b65.num = 3;
        this.$store.commit("playerModule/changePackageProps", {
          handle: "add",
          props: [_0x4a9b65],
          resolve: _0x46d8ea.lQ,
          reject: _0x46d8ea.lQ
        });
        this.$gameMessage.info("分解成功：你得到" + _0x4a9b65.num + "个" + _0x4a9b65.name + "。");
        this.furnaceProp = null;
      }).catch(_0x38b2c6 => {
        this.$gameMessage.info(_0x38b2c6.message);
      }).finally(() => {
        this.throttle = false;
      });
    },
    handleBtnClick(_0x7a44e7) {
      switch (_0x7a44e7) {
        case "add":
          this.handleAddProp();
          break;
        case "sort":
          this.handleSortPackageProps();
          break;
        case "decompose":
          this.handleDecompose();
          break;
        default:
          this.$gameMessage.info("无效操作！");
      }
    },
    handleSortFurnaceProp() {
      if (!this.furnaceProp) {
        return;
      }
      const _0x5411e2 = this.legalProps.findIndex(_0x4b56d6 => _0x4b56d6?.rand === this.furnaceProp.rand);
      if (_0x5411e2 === -1) {
        this.furnaceProp = null;
      } else {
        this.legalProps.splice(_0x5411e2, 1, null);
      }
    }
  },
  computed: {
    propDetailConfig() {
      let _0x4e390d;
      let _0x5383e0;
      switch (this.showPropType) {
        case "pacakge":
          _0x4e390d = 276;
          _0x5383e0 = 66;
          break;
        case "furnace":
          _0x4e390d = 330;
          _0x5383e0 = 80;
          break;
        default:
          _0x4e390d = 0;
          _0x5383e0 = 0;
      }
      return {
        left: _0x4e390d,
        top: _0x5383e0,
        visable: this.isPropDetail
      };
    },
    packageProps() {
      return this.$store.state.playerModule.packageDetail.packageProps;
    },
    packageCapacity() {
      return this.$store.state.playerModule.packageDetail.maxCapacity;
    }
  },
  watch: {
    packageProps: {
      handler(_0x49e300) {
        let _0xdb6b01 = _0x49e300.filter(_0x43a754 => ["equipment", "fragment"].includes(_0x43a754.type));
        _0xdb6b01 = _0x25d55d(_0xdb6b01);
        this.legalProps = _0xdb6b01;
        this.handleSortFurnaceProp();
        this.curPackageProp = null;
      },
      immediate: true
    }
  }
};
var _0x3ff5b0 = _0x1c9f67;
var _0x19fdd5 = (0, _0x191cac.A)(_0x3ff5b0, _0x7663bc, _0x30619d, false, null, null, null);
var _0x1c9ff1 = _0x19fdd5.exports;
var _0x189901 = {
  name: "Smithy",
  props: ["curSceneConfig", "curTab"],
  methods: {
    hyphenate: _0x46d8ea.Tg
  },
  components: {
    PrestigeItem: _0x219d78,
    CombinationInlaying: _0x2f6afe,
    EquipmentEnhancement: _0x1ca04f,
    Decomposition: _0x1c9ff1
  }
};
var _0x3e671e = _0x189901;
var _0x26f46d = (0, _0x191cac.A)(_0x3e671e, _0x62a1b, _0x1989b3, false, null, null, null);
var _0x46f881 = _0x26f46d.exports;