require.d(exports, {
  default: function () {
    return _0x4507dd;
  }
});
function _0x24ca03() {
  var _0x48723f = this;
  var _0x480a65 = _0x48723f._self._c;
  return _0x480a65("div", {
    class: _0x48723f.townClasses
  }, [_0x48723f.sceneCur ? _0x480a65("town-scene", {
    attrs: {
      curSceneConfig: _0x48723f.sceneCur
    },
    on: {
      "scene-leave": _0x48723f.leaveScene
    }
  }) : _0x48723f._e(), _0x480a65("div", {
    class: _0x48723f.townCur.sort === 0 ? "btn--right" : "btn--left",
    on: {
      click: function (_0xeaf3a8) {
        return _0x48723f.arrClick(_0x48723f.townCur.sort);
      }
    }
  }), _0x48723f._l(_0x48723f.townSceneList, function (_0x628254) {
    return _0x480a65("div", {
      key: _0x628254.name,
      class: _0x628254.klass
    }, [_0x480a65("div", {
      staticClass: "btn--map",
      on: {
        click: function (_0x59b666) {
          return _0x48723f.sceneClick(_0x628254);
        }
      }
    })]);
  })], 2);
}
var _0x5831f8 = [];
function _0x35abce() {
  var _0x236abf = this;
  var _0x51c66b = _0x236abf._self._c;
  return _0x51c66b("div", {
    staticClass: "town-scene"
  }, [_0x51c66b("div", {
    class: ["scene-figure", _0x236abf.curSceneConfig.klass]
  }, [_0x51c66b("button", {
    staticClass: "btn--leave",
    on: {
      click: function (_0x4f96a0) {
        return _0x236abf.$emit("scene-leave");
      }
    }
  })]), _0x51c66b("div", {
    class: ["scene-detail", _0x236abf.curSceneConfig.klass + "-detail"]
  }, [_0x51c66b("div", {
    staticClass: "scene-header"
  }, [_0x51c66b("ul", {
    staticClass: "scene-tabs"
  }, _0x236abf._l(_0x236abf.curSceneConfig.tabs, function (_0x1a8dbb) {
    return _0x51c66b("li", {
      key: _0x1a8dbb.sort,
      class: [_0x1a8dbb.klass, _0x1a8dbb.name === _0x236abf.curTab.name ? "active" : ""],
      on: {
        click: function (_0x20aac5) {
          return _0x236abf.handleTabClick(_0x1a8dbb);
        }
      }
    });
  }), 0), _0x51c66b("ul", {
    staticClass: "player-assets"
  }, [_0x236abf.showGoldCoin ? _0x51c66b("li", {
    attrs: {
      title: "金币"
    }
  }, [_0x51c66b("img", {
    attrs: {
      src: "./images/asset/gold-coin.jpg"
    }
  }), _0x236abf._v(" " + _0x236abf._s(_0x236abf.$store.state.playerModule.goldCoin) + " ")]) : _0x236abf._e(), _0x236abf.showPrestige ? _0x51c66b("li", {
    attrs: {
      title: "威望"
    }
  }, [_0x51c66b("img", {
    attrs: {
      src: "./images/asset/prestige.jpg"
    }
  }), _0x236abf._v(" " + _0x236abf._s(_0x236abf.$store.state.playerModule.prestige) + " ")]) : _0x236abf._e(), _0x236abf.showCrystal ? _0x51c66b("li", {
    attrs: {
      title: "水晶"
    }
  }, [_0x51c66b("img", {
    attrs: {
      src: "./images/asset/crystal.jpg"
    }
  }), _0x236abf._v(" " + _0x236abf._s(_0x236abf.$store.state.playerModule.crystal) + " ")]) : _0x236abf._e()])]), _0x51c66b("div", {
    staticClass: "scene-context"
  }, [_0x51c66b(_0x236abf.hyphenate(_0x236abf.curSceneConfig.name), {
    tag: "component",
    attrs: {
      curSceneConfig: _0x236abf.curSceneConfig,
      curTab: _0x236abf.curTab
    }
  })], 1)])]);
}
var _0x403a3d = [];
import * as _0x15c4fa from /*webcrack:missing*/"./72321.js";
function _0x4f5834() {
  var _0x175f65 = this;
  var _0xa75eb9 = _0x175f65._self._c;
  return _0xa75eb9("div", {
    class: _0x175f65.curSceneConfig.klass + "-scene"
  }, [_0xa75eb9("div", {
    staticClass: "store-detail"
  }, [_0xa75eb9("prop-detail", {
    attrs: {
      prop: _0x175f65.showProp,
      propDetailConfig: {
        left: 260,
        top: 42,
        visable: _0x175f65.isPropDetail
      }
    }
  }), _0xa75eb9("div", {
    staticClass: "store-title"
  }, [_0xa75eb9("img", {
    attrs: {
      src: require("./63304.js")
    }
  })]), _0xa75eb9("div", {
    staticClass: "store-context"
  }, [_0x175f65._m(0), _0xa75eb9("ul", {
    class: ["store-context__props", "store-props"]
  }, _0x175f65._l(_0x175f65.storeDetail.storeProps, function (_0x31c08b) {
    return _0xa75eb9("li", {
      key: _0x31c08b.rand,
      class: {
        active: _0x175f65.curStoreProp === _0x31c08b
      },
      on: {
        click: function (_0x26299e) {
          return _0x175f65.storePropClick(_0x31c08b);
        },
        mouseenter: function (_0xc8d97c) {
          return _0x175f65.propMouseEnter(_0x31c08b);
        },
        mouseleave: _0x175f65.propMouseLeave
      }
    }, [_0xa75eb9("div", {
      staticClass: "store-props__name"
    }, [_0xa75eb9("img", {
      attrs: {
        src: require(/*webcrack:missing*/"./37702.js")("./" + _0x31c08b.type + ".gif")
      }
    }), _0x175f65._v(_0x175f65._s(_0x31c08b.name) + " ")]), _0xa75eb9("div", {
      staticClass: "store-props__num"
    }, [_0x175f65._v(_0x175f65._s(_0x31c08b.num))])]);
  }), 0)]), _0xa75eb9("div", {
    staticClass: "store-footer"
  }, [_0xa75eb9("div", {
    staticClass: "store-footer__text"
  }, [_0x175f65._v(" 仓库空间：" + _0x175f65._s(_0x175f65.storeDetail.storeProps.length) + "/" + _0x175f65._s(_0x175f65.storeDetail.maxCapacity) + " ")]), _0xa75eb9("button", {
    staticClass: "btn--move-prop",
    on: {
      click: function (_0x48836e) {
        return _0x175f65.handleClick({
          name: "moveToPackage"
        });
      }
    }
  }, [_0x175f65._v(" 取出物品 ")]), _0xa75eb9("button", {
    staticClass: "btn--store-sort",
    on: {
      click: function (_0x479042) {
        return _0x175f65.handleClick({
          name: "sortStoreProps"
        });
      }
    }
  }, [_0x175f65._v(" 整理仓库 ")])])], 1), _0xa75eb9("div", {
    staticClass: "package-detail"
  }, [_0xa75eb9("package-prop-detail", {
    attrs: {
      curSceneConfig: _0x175f65.curSceneConfig
    },
    scopedSlots: _0x175f65._u([{
      key: "btns",
      fn: function () {
        return [_0xa75eb9("button", {
          staticClass: "btn--move-prop",
          on: {
            click: function (_0x44d020) {
              return _0x175f65.handleClick({
                name: "moveToStore"
              });
            }
          }
        }, [_0x175f65._v(" 存放物品 ")]), _0xa75eb9("button", {
          staticClass: "btn--package-sort",
          on: {
            click: function (_0x2c961a) {
              return _0x175f65.handleClick({
                name: "sortPackageProps"
              });
            }
          }
        }, [_0x175f65._v(" 整理背包 ")])];
      },
      proxy: true
    }]),
    model: {
      value: _0x175f65.curPackageProp,
      callback: function (_0x317947) {
        _0x175f65.curPackageProp = _0x317947;
      },
      expression: "curPackageProp"
    }
  })], 1)]);
}
var _0x305de1 = [function () {
  var _0x12f700 = this;
  var _0x4c1ed2 = _0x12f700._self._c;
  return _0x4c1ed2("ul", {
    staticClass: "store-context__header"
  }, [_0x4c1ed2("li", [_0x12f700._v("名称")]), _0x4c1ed2("li", [_0x12f700._v("数量")])]);
}];
var _0x2852d5 = {
  name: "WareHouse",
  props: ["curSceneConfig"],
  data() {
    return {
      curStoreProp: null,
      curPackageProp: null,
      showProp: null,
      isPropDetail: false
    };
  },
  computed: {
    storeDetail() {
      return this.$store.state.playerModule.storeDetail;
    },
    packageProps() {
      return this.$store.state.playerModule.packageDetail.packageProps;
    }
  },
  methods: {
    storePropClick(_0x19315a) {
      this.curStoreProp = this.curStoreProp === _0x19315a ? null : _0x19315a;
    },
    propMouseEnter(_0x404064) {
      this.showProp = _0x404064;
      this.isPropDetail = true;
    },
    propMouseLeave() {
      this.showPorp = null;
      this.isPropDetail = false;
    },
    handleClick(_0x412c45) {
      if (this.isHandle) {
        return;
      }
      this.isHandle = true;
      const _0x38e053 = () => {
        this.isHandle = false;
      };
      switch (_0x412c45.name) {
        case "moveToPackage":
          if (!this.curStoreProp) {
            this.$gameMessage.info("请先选择您要从仓库中取出的道具！");
            _0x38e053();
            return;
          }
          new SSPromise((_0x5c2a56, _0x3fdde9) => {
            this.$store.commit("playerModule/moveProp", {
              props: [this.curStoreProp],
              handle: "moveToPackage",
              resolve: _0x5c2a56,
              reject: _0x3fdde9
            });
          }).then(_0x347998 => {
            this.$gameMessage.info(_0x347998.message);
            this.curStoreProp = null;
          }).catch(_0x4d3c79 => {
            this.$gameMessage.info(_0x4d3c79.message);
          }).finally(_0x38e053);
          break;
        case "sortStoreProps":
          new SSPromise((_0x17b289, _0x12273c) => {
            this.$store.commit("playerModule/sortPlayerProps", {
              handle: "store",
              resolve: _0x17b289,
              reject: _0x12273c
            });
          }).then(_0xb3d87d => {
            document.querySelector(".store-props").scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth"
            });
            this.$gameMessage.info(_0xb3d87d.message);
            this.curStoreProp = null;
          }).finally(() => {
            _0x38e053();
          });
          break;
        case "moveToStore":
          new SSPromise((_0x1fb48a, _0x51752c) => {
            if (this.curPackageProp) {
              if (this.packageProps.find(_0x3b95e1 => _0x3b95e1.name === this.curPackageProp.name)) {
                this.$store.commit("playerModule/moveProp", {
                  props: [this.curPackageProp],
                  handle: "moveToStore",
                  resolve: _0x1fb48a,
                  reject: _0x51752c
                });
                return;
              } else {
                this.$gameMessage.info("请先选择您要存入仓库的道具！");
                _0x38e053();
                return;
              }
            }
            _0x51752c({
              status: "fail",
              message: "请先选择您要存入仓库的道具！"
            });
          }).then(_0x2aa3e7 => {
            this.$gameMessage.info(_0x2aa3e7.message);
          }).catch(_0x5abd3c => {
            this.$gameMessage.info(_0x5abd3c.message);
          }).finally(() => {
            this.curPackageProp = null;
            _0x38e053();
          });
          break;
        case "sortPackageProps":
          new SSPromise((_0x2a8165, _0x493eaf) => {
            this.$store.commit("playerModule/sortPlayerProps", {
              handle: "package",
              resolve: _0x2a8165,
              reject: _0x493eaf
            });
          }).then(_0x2530f1 => {
            document.querySelector(".store-package-props").scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth"
            });
            this.$gameMessage.info(_0x2530f1.message);
            this.curPackageProp = null;
            _0x38e053();
          });
          break;
        default:
          this.$gameMessage.info("仓库错误操作！");
      }
    }
  }
};
var _0x3f5d21 = _0x2852d5;
import * as _0x31f1af from /*webcrack:missing*/"./81656.js";
var _0x158177 = (0, _0x31f1af.A)(_0x3f5d21, _0x4f5834, _0x305de1, false, null, null, null);
var _0x4567d1 = _0x158177.exports;
function _0x43a3d9() {
  var _0x4f7380 = this;
  var _0x5ed2ca = _0x4f7380._self._c;
  return _0x5ed2ca("div", {
    class: _0x4f7380.curSceneConfig.klass + "-scene"
  }, [_0x5ed2ca("div", {
    staticClass: "bulletin-board-notice"
  }, [_0x5ed2ca("div", {
    staticClass: "notice__title"
  }, [_0x4f7380._v("口袋精灵2 | 免费单机游戏")]), _0x5ed2ca("div", [_0x5ed2ca("div", {
    staticClass: "notice__author"
  }, [_0x4f7380._v("游戏公约：")]), _0x5ed2ca("ul", {
    staticClass: "notice__list"
  }, [_0x5ed2ca("li", [_0x4f7380._v("1. 玩家宗旨：休闲、友善")]), _0x5ed2ca("li", [_0x4f7380._v("2. 不得在游戏（群）内发布广告、违法犯罪、未成年不适内容。")]), _0x5ed2ca("li", [_0x4f7380._v(" 3. 不允许使用脚本，连点器等第三方工具进行游戏。不能修改游戏具体配置，本地存档信息。 ")]), _0x5ed2ca("li", [_0x4f7380._v(" 4. 如有违反上述守则的玩家，将被封禁游戏IP，不再允许进入游戏，不得加入游戏QQ群。 ")]), _0x5ed2ca("li", [_0x4f7380._v(" 5. 本游戏不收取任何安装费用、不提供任何增值服务。提供唯一游戏下载地址："), _0x5ed2ca("strong", [_0x4f7380._v("游戏QQ群：" + _0x4f7380._s(_0x4f7380.WORKER_GROUP_NUMBER_DOWNLOAD))]), _0x4f7380._v("。 ")]), _0x5ed2ca("li", [_0x4f7380._v(" 6. 此版本游戏所用到的图片，文字素材为互联网公开渠道获取，实际版权归《成都叶网科技公司》所有。 ")]), _0x5ed2ca("li", [_0x4f7380._v(" 7. 对差异于官服的此版本游戏所涉及的玩法，代码。及游戏相关服务（图鉴网站、游戏指南）未经授权，私自盗用并投入运营的第三方，保留法律追究责任。 ")]), _0x5ed2ca("li", [_0x4f7380._v(" 8. 如果您在游戏过程中有任何建议或问题,可联系作者QQ："), _0x5ed2ca("strong", [_0x4f7380._v(_0x4f7380._s(_0x4f7380.WORKER_ADMIN_DOWNLOAD))]), _0x4f7380._v("(回复较慢，请见谅)。 ")])])])])]);
}
var _0x404155 = [];
import * as _0x435bfa from /*webcrack:missing*/"./2406.js";
var _0x4c2112 = {
  name: "BulletinBoard",
  props: ["curSceneConfig"],
  data() {
    return {
      WORKER_GROUP_NUMBER_DOWNLOAD: _0x435bfa.q$,
      WORKER_ADMIN_DOWNLOAD: _0x435bfa.gh
    };
  }
};
var _0x564fec = _0x4c2112;
var _0x5e02fa = (0, _0x31f1af.A)(_0x564fec, _0x43a3d9, _0x404155, false, null, null, null);
var _0x2f0f0f = _0x5e02fa.exports;
function _0x1af064() {
  var _0x2cc3e9 = this;
  var _0x206daf = _0x2cc3e9._self._c;
  return _0x206daf("div", {
    class: _0x2cc3e9.curSceneConfig.klass + "-scene"
  }, [_0x206daf("pet-show", {
    attrs: {
      petDetail: _0x2cc3e9.showPasturePet,
      sceneClass: _0x2cc3e9.curSceneConfig.klass
    }
  }), _0x206daf("div", {
    staticClass: "pasture-pets"
  }, [_0x206daf("div", {
    staticClass: "pasture-pets__title"
  }, [_0x206daf("img", {
    attrs: {
      src: require("./43226.js")
    }
  })]), _0x206daf("div", {
    staticClass: "pasture-pets__context"
  }, [_0x2cc3e9._m(0), _0x206daf("ul", {
    staticClass: "context__pets"
  }, _0x2cc3e9._l(_0x2cc3e9.pasturePets, function (_0x456cb8) {
    return _0x206daf("li", {
      key: _0x456cb8.id,
      class: {
        active: _0x2cc3e9.curPasturePet === _0x456cb8
      },
      on: {
        click: function (_0x3ea4cc) {
          return _0x2cc3e9.handlePasturePetClick(_0x456cb8);
        },
        mouseenter: function (_0x131f9a) {
          return _0x2cc3e9.pasturePetMouseEnter(_0x456cb8);
        },
        mouseleave: _0x2cc3e9.pasturePetMouseLeave
      }
    }, [_0x206daf("div", {
      staticClass: "pasture-pet__name"
    }, [_0x206daf("img", {
      attrs: {
        src: require("./53956.js")
      }
    }), _0x2cc3e9._v(_0x2cc3e9._s(_0x456cb8.name) + " ")]), _0x206daf("div", {
      staticClass: "pasture-pet__attribute"
    }, [_0x2cc3e9._v(_0x2cc3e9._s(_0x456cb8.attribute))]), _0x206daf("div", {
      staticClass: "store-props__level"
    }, [_0x2cc3e9._v(_0x2cc3e9._s(_0x456cb8.level))])]);
  }), 0)]), _0x206daf("div", {
    staticClass: "pasture-pets__footer"
  }, [_0x206daf("div", {
    staticClass: "footer__text"
  }, [_0x2cc3e9._v(" 牧场宠物数量：" + _0x2cc3e9._s(_0x2cc3e9.pasturePets.length) + "/" + _0x2cc3e9._s(_0x2cc3e9.$store.state.petModule.pastureMaxCapacity) + " ")]), _0x206daf("button", {
    staticClass: "btn--giveup",
    on: {
      click: _0x2cc3e9.handleDeletePet
    }
  }, [_0x2cc3e9._v("抛弃")]), _0x206daf("button", {
    staticClass: "btn--carry",
    on: {
      click: function (_0x1fe8d8) {
        return _0x2cc3e9.handleCarryClick("carry");
      }
    }
  }, [_0x2cc3e9._v(" 携带 ")])])]), _0x206daf("div", {
    staticClass: "pasture-with-pets"
  }, [_0x206daf("div", {
    staticClass: "pasture-with-pets__title"
  }, [_0x206daf("img", {
    attrs: {
      src: require("./8435.js")
    }
  })]), _0x206daf("div", {
    staticClass: "pasture-with-pets__context"
  }, [_0x206daf("ul", _0x2cc3e9._l(_0x2cc3e9.curPets, function (_0x4184fe) {
    return _0x206daf("li", {
      key: _0x4184fe.id
    }, [_0x206daf("img", {
      class: ["zz", _0x4184fe.id === _0x2cc3e9.curPetId ? "active" : ""],
      attrs: {
        src: require("./6207.js")
      }
    }), _0x206daf("div", {
      class: ["figure", _0x4184fe.id === _0x2cc3e9.curPetId ? "active" : ""],
      on: {
        click: function (_0x1d5620) {
          return _0x2cc3e9.handleSelectPetById(_0x4184fe.id);
        }
      }
    }, [_0x206daf("img", {
      attrs: {
        src: require(/*webcrack:missing*/"./63632.js")("./" + _0x4184fe.figure + ".gif")
      }
    }), _0x206daf("span", [_0x2cc3e9._v(_0x2cc3e9._s(_0x4184fe.name)), _0x206daf("br"), _0x2cc3e9._v(" LV " + _0x2cc3e9._s(_0x4184fe.level))]), _0x4184fe.id === _0x2cc3e9.fightPetId ? _0x206daf("div", {
      staticClass: "battle-pet"
    }, [_0x2cc3e9._v("战斗中")]) : _0x2cc3e9._e()])]);
  }), 0)]), _0x206daf("div", {
    staticClass: "pasture-with-pets__footer"
  }, [_0x206daf("button", {
    staticClass: "btn--deposit",
    on: {
      click: function (_0x8571f1) {
        return _0x2cc3e9.handleCarryClick("deposit");
      }
    }
  }, [_0x2cc3e9._v(" 寄存 ")])])])], 1);
}
var _0x20c4e1 = [function () {
  var _0x6bf7d4 = this;
  var _0x1259e3 = _0x6bf7d4._self._c;
  return _0x1259e3("ul", {
    staticClass: "context__header"
  }, [_0x1259e3("li", [_0x6bf7d4._v("名称")]), _0x1259e3("li", [_0x6bf7d4._v("五行")]), _0x1259e3("li", [_0x6bf7d4._v("等级")])]);
}];
var _0xb2d5f9 = {
  name: "Pasture",
  props: ["curSceneConfig", "curTab"],
  data() {
    return {
      curPasturePet: null,
      isPasturePet: false,
      showPasturePet: null
    };
  },
  computed: {
    pasturePets() {
      return this.$store.getters["petModule/pasturePets"];
    },
    curPets() {
      return this.$store.getters["petModule/curPets"];
    },
    fightPetId() {
      return this.$store.state.petModule.fightPetId;
    },
    curPetId() {
      return this.$store.state.petModule.curPetId;
    }
  },
  methods: {
    handlePasturePetClick(_0x5b1e1b) {
      this.curPasturePet = this.curPasturePet === _0x5b1e1b ? null : _0x5b1e1b;
    },
    pasturePetMouseEnter(_0x4e6845) {
      this.showPasturePet = _0x4e6845;
      this.isPasturePet = true;
    },
    pasturePetMouseLeave() {
      this.showPasturePet = null;
      this.isPasturePet = false;
    },
    handleCarryClick(_0x28d915) {
      new SSPromise((_0x5c09b5, _0x2e50e3) => {
        this.$store.commit("petModule/changeCurPets", {
          command: _0x28d915,
          petId: _0x28d915 === "carry" ? this.curPasturePet?.id : this.curPetId,
          resolve: _0x5c09b5,
          reject: _0x2e50e3
        });
      }).then(_0x3fb4dd => {
        this.$gameMessage.info(_0x3fb4dd.message);
        if (_0x28d915 === "carry") {
          this.curPasturePet = null;
        }
      }).catch(_0x281ebe => {
        this.$gameMessage.info(_0x281ebe.message);
      });
    },
    handleDeletePet() {
      new SSPromise((_0xc153c7, _0x34ec38) => {
        if (!this.curPasturePet) {
          _0x34ec38({
            status: "fail",
            message: "请先在牧场中点击确认您要抛弃的宠物！"
          });
          return;
        }
        const _0x3ad2bd = this.$store.state.playerModule.wornEquipments;
        if (_0x3ad2bd.find(_0x499e17 => _0x499e17.petId === this.curPasturePet.id)) {
          _0x34ec38({
            status: "fail",
            message: "请先取下" + this.curPasturePet.name + "身上穿戴的所有装备！"
          });
        } else {
          this.$gameAlert.openAlert("抛弃宠物 " + this.curPasturePet.name + " 后不能恢复，请确认您是否要抛弃该宠物！", {
            confirmHandle: () => {
              this.$store.commit("petModule/deletePasturePet", {
                pasturePet: this.curPasturePet,
                resolve: _0xc153c7,
                reject: _0x34ec38
              });
            }
          });
        }
      }).then(_0x1ab1c6 => {
        this.$gameMessage.info(_0x1ab1c6.message);
      }).catch(_0x2a35ed => {
        this.$gameMessage.info(_0x2a35ed.message);
      }).finally(() => {
        this.curPasturePet = null;
      });
    },
    handleSelectPetById(_0x4fad69) {
      if (_0x4fad69 !== this.curPetId) {
        this.$store.commit("petModule/changeCurPetById", {
          id: _0x4fad69
        });
      }
    }
  },
  created() {
    this.$store.commit("petModule/changeCurPetById", {
      handle: "INIT"
    });
  },
  beforeDestroy() {
    this.$store.commit("petModule/changeCurPetById", {
      handle: "EXIT"
    });
  }
};
var _0x17e595 = _0xb2d5f9;
var _0x1dfb65 = (0, _0x31f1af.A)(_0x17e595, _0x1af064, _0x20c4e1, false, null, null, null);
var _0x5295be = _0x1dfb65.exports;
function _0x389fdb() {
  var _0x583c8d = this;
  var _0x48e0a9 = _0x583c8d._self._c;
  return _0x48e0a9("div", {
    class: _0x583c8d.curSceneConfig.klass + "-scene"
  }, [_0x48e0a9("div", {
    staticClass: "grocery-store-detail"
  }, [_0x48e0a9("prop-detail", {
    attrs: {
      prop: _0x583c8d.showProp,
      propDetailConfig: {
        left: 266,
        top: 42,
        visable: _0x583c8d.isPropDetail
      }
    }
  }), _0x48e0a9("div", {
    staticClass: "grocery-store__title"
  }, [_0x48e0a9("img", {
    attrs: {
      src: require("./83281.js")
    }
  })]), _0x48e0a9("div", {
    staticClass: "grocery-store__context"
  }, [_0x48e0a9("ul", {
    staticClass: "grocery-store__header"
  }, [_0x48e0a9("li", [_0x583c8d._v("名称")]), _0x48e0a9("li", [_0x583c8d._v(" " + _0x583c8d._s(_0x583c8d.curTab.name === "goldCoinStoreTab" ? "金币" : "威望") + "价格 ")])]), _0x48e0a9("ul", {
    class: ["grocery-store__props", "store-props"]
  }, _0x583c8d._l(_0x583c8d.curStoreProps, function (_0x21d125) {
    return _0x48e0a9("li", {
      key: _0x21d125.rand,
      class: {
        active: _0x583c8d.curStoreProp === _0x21d125
      },
      on: {
        click: function (_0x1c9496) {
          return _0x583c8d.storePropClick(_0x21d125);
        },
        mouseenter: function (_0x2542a6) {
          return _0x583c8d.propMouseEnter(_0x21d125);
        },
        mouseleave: _0x583c8d.propMouseLeave
      }
    }, [_0x48e0a9("div", {
      staticClass: "store-props__name"
    }, [_0x48e0a9("img", {
      attrs: {
        src: require(/*webcrack:missing*/"./37702.js")("./" + _0x21d125.type + ".gif")
      }
    }), _0x583c8d._v(_0x583c8d._s(_0x21d125.name) + " ")]), _0x48e0a9("div", {
      staticClass: "store-props__num"
    }, [_0x583c8d._v(_0x583c8d._s(_0x21d125.price))])]);
  }), 0)]), _0x48e0a9("div", {
    staticClass: "grocery-store__footer"
  }, [_0x48e0a9("div", {
    staticClass: "grocery-store__input"
  }, [_0x48e0a9("div", [_0x583c8d._v("数量：")]), _0x48e0a9("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _0x583c8d.formatedStorePropNum,
      expression: "formatedStorePropNum"
    }],
    attrs: {
      type: "number"
    },
    domProps: {
      value: _0x583c8d.formatedStorePropNum
    },
    on: {
      input: function (_0x5da1e5) {
        if (!_0x5da1e5.target.composing) {
          _0x583c8d.formatedStorePropNum = _0x5da1e5.target.value;
        }
      }
    }
  }), _0x48e0a9("button", {
    staticClass: "btn--buy",
    on: {
      click: function (_0xfaf2dc) {
        return _0x583c8d.handleBtnClick(_0x583c8d.curTab.name === "prestigeStoreTab" ? "prestigeBuy" : "goldCoinBuy");
      }
    }
  }, [_0x583c8d._v(" 购买 ")])])])], 1), _0x48e0a9("div", {
    staticClass: "package-detail"
  }, [_0x48e0a9("package-prop-detail", {
    attrs: {
      curSceneConfig: _0x583c8d.curSceneConfig
    },
    scopedSlots: _0x583c8d._u([{
      key: "btns",
      fn: function () {
        return [_0x583c8d.curTab.name === "goldCoinStoreTab" ? _0x48e0a9("div", {
          staticClass: "grocery-store__input"
        }, [_0x48e0a9("div", [_0x583c8d._v("数量：")]), _0x48e0a9("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _0x583c8d.formatedPackagePropNum,
            expression: "formatedPackagePropNum"
          }],
          attrs: {
            type: "number"
          },
          domProps: {
            value: _0x583c8d.formatedPackagePropNum
          },
          on: {
            input: function (_0x325361) {
              if (!_0x325361.target.composing) {
                _0x583c8d.formatedPackagePropNum = _0x325361.target.value;
              }
            }
          }
        }), _0x48e0a9("button", {
          staticClass: "btn--sale",
          on: {
            click: function (_0x3324db) {
              return _0x583c8d.handleBtnClick("goldCoinSale");
            }
          }
        }, [_0x583c8d._v(" 出售 ")])]) : _0x583c8d._e()];
      },
      proxy: true
    }]),
    model: {
      value: _0x583c8d.curPackageProp,
      callback: function (_0x17420a) {
        _0x583c8d.curPackageProp = _0x17420a;
      },
      expression: "curPackageProp"
    }
  })], 1)]);
}
var _0x123e63 = [];
import * as _0x4f67b5 from /*webcrack:missing*/"./66848.js";
import * as _0x5ea4e6 from /*webcrack:missing*/"./36682.js";
var _0x3e7221 = {
  name: "GroceryStore",
  props: ["curSceneConfig", "curTab"],
  data() {
    return {
      curStoreProp: null,
      curPackageProp: null,
      showProp: null,
      isPropDetail: false,
      storePropNum: null,
      packagePropNum: null
    };
  },
  computed: {
    curStoreProps() {
      return _0x5ea4e6.NR.find(_0x37b1ac => _0x37b1ac.name === this.curTab.name).props;
    },
    formatedStorePropNum: {
      get() {
        const _0x5eed4a = _0x4f67b5.Ay.filter("formatPropNum");
        return _0x5eed4a(this.storePropNum);
      },
      set(_0x84c16c) {
        this.storePropNum = Number(_0x84c16c);
      }
    },
    formatedPackagePropNum: {
      get() {
        const _0xad5919 = _0x4f67b5.Ay.filter("formatPropNum");
        return _0xad5919(this.packagePropNum);
      },
      set(_0x1a2d54) {
        this.packagePropNum = Number(_0x1a2d54);
      }
    }
  },
  methods: {
    storePropClick(_0xcd1280) {
      if (this.curStoreProp === _0xcd1280) {
        this.curStoreProp = null;
      } else {
        this.curStoreProp = _0xcd1280;
        this.storePropNum = 1;
      }
    },
    propMouseEnter(_0x4b2ff5) {
      this.showProp = _0x4b2ff5;
      this.isPropDetail = true;
    },
    propMouseLeave() {
      this.showPorp = null;
      this.isPropDetail = false;
    },
    handleBtnClick(_0x501f8f) {
      if (_0x501f8f === "goldCoinBuy" || _0x501f8f === "prestigeBuy") {
        new SSPromise((_0x3959e6, _0x2d6882) => {
          const {
            curStoreProp: _0x5008c0,
            storePropNum: _0x4416c8
          } = this;
          if (!_0x5008c0) {
            _0x2d6882({
              status: "fail",
              message: "购买失败，请先选择您要购买的物品！"
            });
            return;
          }
          if (_0x4416c8 <= 0 || _0x4416c8 > 1000) {
            _0x2d6882({
              status: "fail",
              message: "购买失败，单次购买物品数量限制在 1 - 1000 ！"
            });
            return;
          }
          if (_0x5008c0.type === "equipment" && _0x4416c8 > 1) {
            _0x2d6882({
              status: "fail",
              message: "装备道具请一件件分开购买。"
            });
            return;
          }
          _0x5008c0.num = _0x4416c8;
          const _0x1ceb3e = () => {
            this.$store.commit("handleGroceryStore", {
              handle: _0x501f8f,
              prop: JSON.parse(JSON.stringify(_0x5008c0)),
              resolve: _0x3959e6,
              reject: _0x2d6882
            });
          };
          const _0x56f69c = () => {
            _0x2d6882(null);
          };
          this.$gameAlert.openAlert("购买 " + _0x5008c0.name + " * " + _0x4416c8 + " 共需要 " + _0x5008c0.price * _0x4416c8 + " " + (_0x501f8f === "goldCoinBuy" ? "金币" : "威望") + "，请确认您是否要购买！", {
            confirmHandle: _0x1ceb3e,
            cancelHandle: _0x56f69c
          });
        }).then(_0x15a4a0 => {
          this.$gameMessage.info(_0x15a4a0.message);
          this.storePropNum = 1;
          this.curStoreProp = null;
        }).catch(_0x460869 => {
          if (_0x460869) {
            this.$gameMessage.info(_0x460869.message);
          }
        });
      } else if (_0x501f8f === "goldCoinSale") {
        new SSPromise((_0xd1333, _0x372290) => {
          const {
            curPackageProp: _0x52c894,
            packagePropNum: _0x1764ec
          } = this;
          if (!_0x52c894) {
            _0x372290({
              status: "fail",
              message: "出售失败，请先选择您要出售的物品！"
            });
            return;
          }
          if (_0x52c894.type === "special") {
            _0x372290({
              status: "fail",
              message: "出售失败，" + _0x52c894.name + "无法售卖哦！"
            });
            return;
          }
          if (_0x1764ec > _0x52c894.num) {
            _0x372290({
              status: "fail",
              message: "出售失败，您没有足够数量的 " + _0x52c894.name + "!"
            });
            return;
          }
          if (_0x1764ec < 1 || _0x1764ec > 1000) {
            _0x372290({
              status: "fail",
              message: "出售失败，单次出售物品数量限制在 1 - 1000 ！"
            });
            return;
          }
          const _0x597170 = () => {
            this.$store.commit("handleGroceryStore", {
              handle: "goldCoinSale",
              prop: _0x52c894,
              num: _0x1764ec,
              resolve: _0xd1333,
              reject: _0x372290
            });
          };
          const _0x423d71 = () => {
            _0x372290(null);
          };
          this.$gameAlert.openAlert("出售 " + _0x52c894.name + " * " + _0x1764ec + " 可以得到 " + _0x52c894.price * _0x1764ec + " 金币，请确认您是否要出售！", {
            confirmHandle: _0x597170,
            cancelHandle: _0x423d71
          });
        }).then(_0x45efaa => {
          this.$gameMessage.info(_0x45efaa.message);
          this.curPackageProp = null;
          this.packagePropNum = 1;
        }).catch(_0x875d62 => {
          if (_0x875d62) {
            this.$gameMessage.info(_0x875d62.message);
          }
        });
      }
    }
  },
  watch: {
    curTab() {
      this.storePropNum = null;
      this.packagePropNum = null;
      this.curPackageProp = null;
      this.curStoreProp = null;
      const _0x529d0d = document.querySelector(".grocery-store__props");
      _0x529d0d.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    },
    curPackageProp(_0x4a812f, _0x48ddb3) {
      if (_0x4a812f !== _0x48ddb3) {
        this.packagePropNum = 1;
      }
    }
  }
};
var _0x4e7afd = _0x3e7221;
var _0x570643 = (0, _0x31f1af.A)(_0x4e7afd, _0x389fdb, _0x123e63, false, null, null, null);
var _0x232be0 = _0x570643.exports;
function _0x3cfbc1() {
  var _0x2052ab = this;
  var _0x3bc401 = _0x2052ab._self._c;
  return _0x3bc401("div", {
    class: _0x2052ab.curSceneConfig.klass + "-scene"
  }, [_0x3bc401("div", {
    staticClass: "daily-rewards-detail"
  }, _0x2052ab._l(_0x2052ab.dailyRewardConfig, function (_0x11abd9) {
    return _0x3bc401("div", {
      key: _0x11abd9.name,
      class: _0x11abd9.klass
    }, [_0x3bc401("div", {
      staticClass: "reward-title"
    }, [_0x2052ab._v(_0x2052ab._s(_0x11abd9.title))]), _0x3bc401("div", {
      staticClass: "reward-icon"
    }, [_0x3bc401("img", {
      attrs: {
        src: require("./14318.js")("./" + _0x11abd9.klass + ".jpg")
      }
    })]), _0x3bc401("div", {
      staticClass: "reward-explain"
    }, [_0x3bc401("li", [_0x2052ab._v("说明：")]), _0x3bc401("li", [_0x2052ab._v(" " + _0x2052ab._s(_0x11abd9.explain) + " ")])]), _0x3bc401("button", {
      class: ["btn--receive", _0x11abd9.active ? "active" : ""],
      on: {
        click: function (_0x50dba) {
          return _0x2052ab.handleBtnClick(_0x11abd9);
        }
      }
    }, [_0x2052ab._v(" 领取 ")])]);
  }), 0)]);
}
var _0x54e2c9 = [];
import * as _0x214dc0 from /*webcrack:missing*/"./41314.js";
var _0x124e1c = _0x214dc0;
var _0x59a9d7 = {
  name: "Palace",
  props: ["curSceneConfig"],
  data() {
    return {
      now: null,
      rewardTime: null,
      dailyRewardConfig: null
    };
  },
  methods: {
    handleBtnClick(_0x46cec0) {
      if (!_0x46cec0.active) {
        return;
      }
      if (this.throttle) {
        return;
      }
      let _0xaaf6f6;
      this.throttle = true;
      if (["dayReward", "weekReward"].includes(_0x46cec0.name)) {
        _0xaaf6f6 = _0x5ea4e6.uP.find(_0x573efe => _0x573efe.name === (_0x46cec0.name === "dayReward" ? "每日福利礼包" : "周末福利礼包"));
        _0xaaf6f6 = _0x124e1c(_0xaaf6f6);
        _0xaaf6f6.num = 2;
      } else if (_0x46cec0.name === "holidayReward") {
        const _0x3cf505 = this.rewardTime.holidayReward && this.dayjs(this.rewardTime.holidayReward);
        if (_0x3cf505 && _0x3cf505.isSame("2024-01-01", "date")) {
          this.$gameMessage.info("您已领取过元旦节日礼包了。");
          return;
        }
        if (this.now.isSame("2024-01-01", "date")) {
          _0xaaf6f6 = _0x5ea4e6.uP.find(_0x3613bd => _0x3613bd.name === "元旦节日礼包");
          _0xaaf6f6 = _0x124e1c(_0xaaf6f6);
          _0xaaf6f6.num = 1;
        }
      }
      new SSPromise((_0x258ff1, _0x5b7f2a) => {
        this.$store.commit("playerModule/changePackageProps", {
          handle: "add",
          props: [_0xaaf6f6],
          resolve: _0x258ff1,
          reject: _0x5b7f2a
        });
      }).then(() => {
        _0x46cec0.active = false;
        if (_0x46cec0.name === "dayReward") {
          this.rewardTime.dayReward = this.now.format();
          this.$gameLocalStorage.setItem("rewardTime", this.rewardTime);
          this.dailyRewardConfig.splice(0, 1, _0x46cec0);
          this.$gameMessage.info("领取每日登录奖励成功, 你得到两个每日福利礼包！");
        }
        if (_0x46cec0.name === "weekReward") {
          this.rewardTime.weekReward = this.now.format();
          this.$gameLocalStorage.setItem("rewardTime", this.rewardTime);
          this.dailyRewardConfig.splice(1, 1, _0x46cec0);
          this.$gameMessage.info("领取周末登录奖励成功, 你得到两个周末福利礼包！");
        }
        if (_0x46cec0.name === "holidayReward") {
          this.rewardTime.holidayReward = this.now.format();
          this.$gameLocalStorage.setItem("rewardTime", this.rewardTime);
          this.dailyRewardConfig.splice(2, 1, _0x46cec0);
          this.$gameMessage.info("领取元旦节日礼包成功。");
        }
      }).catch(_0x3730e9 => {
        this.$gameMessage.info(_0x3730e9.message);
      }).finally(() => {
        this.throttle = false;
      });
    }
  },
  created() {
    this.now = this.dayjs(new Date(), "yyyy-mm-dd hh:mm:ss");
    this.dailyRewardConfig = [{
      name: "dayReward",
      klass: "day-reward",
      sort: 0,
      title: "日常奖励",
      explain: "每日福利礼包，免费领取，用户每天可以通过皇宫日常奖励界面领取一次。",
      active: true
    }, {
      name: "weekReward",
      klass: "week-reward",
      sort: 1,
      title: "周末奖励",
      explain: "周末福利奖励物品，周末时开启奖励领取，一个账号一周只能领取一次。",
      active: true
    }, {
      name: "holidayReward",
      klass: "holiday-reward",
      sort: 2,
      title: "节日奖励",
      explain: "节日福利，每逢佳节时候开启，根据官方公告可以查询奖励物品领取次数以及奖励物品内容。",
      active: false
    }];
    this.rewardTime = this.$gameLocalStorage.getItem("rewardTime") || {};
    const _0x1d1faa = this.rewardTime.dayReward && this.dayjs(this.rewardTime.dayReward);
    if (_0x1d1faa && (_0x1d1faa.isToday() || _0x1d1faa.isAfter(this.now))) {
      this.dailyRewardConfig[0].active = false;
    }
    const _0x2a0b8d = [6, 0].includes(this.now.day());
    if (_0x2a0b8d) {
      if (this.rewardTime.weekReward) {
        const _0x2cea2e = this.dayjs(this.rewardTime.weekReward);
        const _0x364db7 = _0x2cea2e.isToday() || _0x2cea2e.isYesterday() || _0x2cea2e.isAfter(this.now);
        if (_0x364db7) {
          this.dailyRewardConfig[1].active = false;
        }
      }
    } else {
      this.dailyRewardConfig[1].active = false;
    }
    const _0x16073d = this.rewardTime.holidayReward && this.dayjs(this.rewardTime.holidayReward);
    if (_0x16073d && _0x16073d.isSame("2024-01-01", "date")) {
      this.dailyRewardConfig[2].active = false;
    } else if (this.now.isSame("2024-01-01", "date")) {
      this.dailyRewardConfig[2].active = true;
    } else {
      this.dailyRewardConfig[2].active = false;
    }
  }
};
var _0x356339 = _0x59a9d7;
var _0x561b6b = (0, _0x31f1af.A)(_0x356339, _0x3cfbc1, _0x54e2c9, false, null, null, null);
var _0x2d8326 = _0x561b6b.exports;
function _0x4e7ff9() {
  var _0x1cf806 = this;
  var _0x57c624 = _0x1cf806._self._c;
  return _0x57c624("div", {
    class: _0x1cf806.curSceneConfig.klass + "-scene"
  }, [_0x57c624("div", {
    staticClass: "exchange-notice"
  }, [_0x1cf806._v("交易所作者-莉莉丝正在其他城镇登记物品。")])]);
}
var _0x1a411d = [];
var _0x1c77e7 = {
  name: "Exchange",
  props: ["curSceneConfig"]
};
var _0x5bed49 = _0x1c77e7;
var _0x323525 = (0, _0x31f1af.A)(_0x5bed49, _0x4e7ff9, _0x1a411d, false, null, null, null);
var _0xb0c799 = _0x323525.exports;
function _0x204630() {
  var _0x3100f1 = this;
  var _0xfd70aa = _0x3100f1._self._c;
  return _0xfd70aa("div", {
    class: _0x3100f1.curSceneConfig.klass + "-scene"
  }, [_0xfd70aa("div", {
    staticClass: "mystery-store-detail"
  }, [_0xfd70aa("prop-detail", {
    attrs: {
      prop: _0x3100f1.showProp,
      propDetailConfig: {
        left: 266,
        top: 42,
        visable: _0x3100f1.isPropDetail
      }
    }
  }), _0xfd70aa("div", {
    staticClass: "mystery-store__title"
  }, [_0xfd70aa("img", {
    attrs: {
      src: require("./83281.js")
    }
  })]), _0xfd70aa("div", {
    staticClass: "mystery-store__context"
  }, [_0x3100f1._m(0), _0xfd70aa("ul", {
    class: ["mystery-store__props", "store-props"]
  }, _0x3100f1._l(_0x3100f1.curStoreProps, function (_0x4b7690) {
    return _0xfd70aa("li", {
      key: _0x4b7690.rand,
      class: {
        active: _0x3100f1.curStoreProp === _0x4b7690
      },
      on: {
        click: function (_0x477a58) {
          return _0x3100f1.storePropClick(_0x4b7690);
        },
        mouseenter: function (_0x1f8f6d) {
          return _0x3100f1.propMouseEnter(_0x4b7690);
        },
        mouseleave: _0x3100f1.propMouseLeave
      }
    }, [_0xfd70aa("div", {
      staticClass: "store-props__name"
    }, [_0xfd70aa("img", {
      attrs: {
        src: require(/*webcrack:missing*/"./37702.js")("./" + _0x4b7690.type + ".gif")
      }
    }), _0x3100f1._v(_0x3100f1._s(_0x4b7690.name) + " ")]), _0xfd70aa("div", {
      staticClass: "store-props__num"
    }, [_0x3100f1._v(_0x3100f1._s(_0x4b7690.price))])]);
  }), 0)]), _0xfd70aa("div", {
    staticClass: "mystery-store__footer"
  }, [_0xfd70aa("div", {
    staticClass: "mystery-store__input"
  }, [_0xfd70aa("div", [_0x3100f1._v("数量：")]), _0xfd70aa("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _0x3100f1.formatedStorePropNum,
      expression: "formatedStorePropNum"
    }],
    attrs: {
      type: "number"
    },
    domProps: {
      value: _0x3100f1.formatedStorePropNum
    },
    on: {
      input: function (_0x337a8f) {
        if (!_0x337a8f.target.composing) {
          _0x3100f1.formatedStorePropNum = _0x337a8f.target.value;
        }
      }
    }
  }), _0xfd70aa("button", {
    staticClass: "btn--buy",
    on: {
      click: function (_0x452e23) {
        return _0x3100f1.handleBtnClick("crystalBuy");
      }
    }
  }, [_0x3100f1._v(" 购买 ")])])])], 1), _0xfd70aa("div", {
    staticClass: "package-detail"
  }, [_0xfd70aa("package-prop-detail", {
    attrs: {
      curSceneConfig: _0x3100f1.curSceneConfig
    }
  })], 1)]);
}
var _0x31ef47 = [function () {
  var _0x48858a = this;
  var _0x16937b = _0x48858a._self._c;
  return _0x16937b("ul", {
    staticClass: "mystery-store__header"
  }, [_0x16937b("li", [_0x48858a._v("名称")]), _0x16937b("li", [_0x48858a._v("水晶价格")])]);
}];
var _0x326679 = {
  name: "MysteryStore",
  props: ["curSceneConfig", "curTab"],
  data() {
    return {
      curStoreProp: null,
      storePropNum: null,
      showProp: null,
      isPropDetail: false
    };
  },
  computed: {
    curStoreProps() {
      return _0x5ea4e6.rn.find(_0x475250 => _0x475250.name === this.curTab.name).props;
    },
    formatedStorePropNum: {
      get() {
        const _0x24ffcd = _0x4f67b5.Ay.filter("formatPropNum");
        return _0x24ffcd(this.storePropNum);
      },
      set(_0x4e12e6) {
        this.storePropNum = Number(_0x4e12e6);
      }
    }
  },
  methods: {
    storePropClick(_0x2f8742) {
      if (this.curStoreProp === _0x2f8742) {
        this.curStoreProp = null;
      } else {
        this.curStoreProp = _0x2f8742;
        this.storePropNum = 1;
      }
    },
    propMouseEnter(_0x2b6549) {
      this.showProp = _0x2b6549;
      this.isPropDetail = true;
    },
    propMouseLeave() {
      this.showPorp = null;
      this.isPropDetail = false;
    },
    handleBtnClick(_0xd25608) {
      if (_0xd25608 === "crystalBuy") {
        new SSPromise((_0x20f32f, _0x18a256) => {
          const {
            curStoreProp: _0x447359,
            storePropNum: _0x3fe67c
          } = this;
          if (!_0x447359) {
            _0x18a256({
              status: "fail",
              message: "购买失败，请先选择您要购买的物品！"
            });
            return;
          }
          if (_0x3fe67c <= 0 || _0x3fe67c > 1000) {
            _0x18a256({
              status: "fail",
              message: "购买失败，单次购买物品数量限制在 1 - 1000 ！"
            });
            return;
          }
          if (_0x447359.type === "equipment" && _0x3fe67c > 1) {
            _0x18a256({
              status: "fail",
              message: "装备道具请一件件分开购买。"
            });
            return;
          }
          const _0x4ff856 = "购买 " + _0x447359.name + " * " + _0x3fe67c + " 共需要 " + _0x447359.price * _0x3fe67c + " 水晶，请确认您是否要购买！";
          _0x447359.num = _0x3fe67c;
          const _0x1033c8 = () => {
            this.$store.commit("handleMysteryStore", {
              handle: _0xd25608,
              prop: JSON.parse(JSON.stringify(_0x447359)),
              resolve: _0x20f32f,
              reject: _0x18a256
            });
          };
          this.$gameAlert.openAlert(_0x4ff856, {
            confirmHandle: _0x1033c8,
            cancelHandle: () => {
              _0x18a256(null);
            }
          });
        }).then(_0x208aa9 => {
          this.$gameMessage.info(_0x208aa9.message);
          this.curStoreProp = null;
          this.storePropNum = 1;
        }).catch(_0x196c64 => {
          if (_0x196c64) {
            this.$gameMessage.info(_0x196c64.message);
          }
        });
      }
    }
  }
};
var _0x3abdfa = _0x326679;
var _0x1782e3 = (0, _0x31f1af.A)(_0x3abdfa, _0x204630, _0x31ef47, false, null, null, null);
var _0xdec42e = _0x1782e3.exports;
function _0x4ef87a() {
  var _0x4771c6 = this;
  var _0x56b707 = _0x4771c6._self._c;
  return _0x56b707("div", {
    class: _0x4771c6.curSceneConfig.klass + "-scene"
  }, [_0x56b707("div", {
    staticClass: "family-temple-notice"
  }, [_0x4771c6._v("家族神殿作者-胡克不知去向？")])]);
}
var _0x218066 = [];
var _0x277015 = {
  name: "familyTemple",
  props: ["curSceneConfig"]
};
var _0x1d9c34 = _0x277015;
var _0x5e40fc = (0, _0x31f1af.A)(_0x1d9c34, _0x4ef87a, _0x218066, false, null, null, null);
var _0x49b668 = _0x5e40fc.exports;
function _0x405b9f() {
  var _0x544cff = this;
  var _0x2e8d04 = _0x544cff._self._c;
  return _0x2e8d04("div", {
    class: _0x544cff.curSceneConfig.klass + "-scene"
  }, [_0x2e8d04("div", {
    staticClass: "medal-detail"
  }, [_0x544cff._m(0), _0x2e8d04("ul", {
    staticClass: "medal-detail__context"
  }, _0x544cff._l(_0x544cff.medalsConfig, function (_0x7bf4c1) {
    return _0x2e8d04("li", {
      key: _0x7bf4c1.name
    }, [_0x2e8d04("div", {
      staticClass: "medal-img"
    }, [_0x2e8d04("img", {
      attrs: {
        src: "./images/medal/" + _0x7bf4c1.img
      }
    })]), _0x2e8d04("div", {
      staticClass: "medal-name"
    }, [_0x544cff._v(_0x544cff._s(_0x7bf4c1.name))]), _0x2e8d04("div", {
      staticClass: "medal-description"
    }, [_0x544cff._v(_0x544cff._s(_0x7bf4c1.desc))]), _0x2e8d04("div", {
      staticClass: "medal-radio",
      on: {
        click: function (_0x164ba9) {
          return _0x544cff.selectMedal(_0x7bf4c1);
        }
      }
    }, [_0x2e8d04("div", {
      class: _0x7bf4c1.status
    })])]);
  }), 0)])]);
}
var _0x409730 = [function () {
  var _0x5981d4 = this;
  var _0x5a0bef = _0x5981d4._self._c;
  return _0x5a0bef("ul", {
    staticClass: "medal-detail__title"
  }, [_0x5a0bef("li", [_0x5981d4._v("图标")]), _0x5a0bef("li", [_0x5981d4._v("名称")]), _0x5a0bef("li", [_0x5981d4._v("获得方式")]), _0x5a0bef("li", [_0x5981d4._v("生效")])]);
}];
import * as _0x360245 from /*webcrack:missing*/"./59390.js";
var _0x42e730 = {
  name: "Mokaz",
  props: ["curSceneConfig", "curTab"],
  data() {
    return {
      medalsConfig: _0x360245.HQ
    };
  },
  created() {
    this.$store.commit("refreshMedalProgress");
    this.refreshMedalsConfig();
  },
  computed: {
    packageProps() {
      return this.$store.state.playerModule.packageDetail.packageProps;
    },
    totalPets() {
      return this.$store.state.petModule.totalPets;
    }
  },
  methods: {
    refreshMedalsConfig() {
      const _0x28c951 = this.$store.state.medalProgress;
      this.medalsConfig.forEach(_0xbcd7f8 => {
        const _0x4e3fa9 = _0x28c951.find(_0x3c52d4 => _0x3c52d4.mid === _0xbcd7f8.id);
        if (_0x4e3fa9) {
          _0xbcd7f8.status = _0x4e3fa9.status;
        }
      });
    },
    selectMedal(_0x2bf029) {
      if (_0x2bf029.status !== "disabled") {
        this.$store.commit("selectMedal", {
          id: _0x2bf029.id,
          status: _0x2bf029.status
        });
        this.refreshMedalsConfig();
        this.$forceUpdate();
      }
    }
  },
  watch: {
    packageProps() {
      this.$store.commit("refreshMedalProgress");
      this.refreshMedalsConfig();
      this.$forceUpdate();
    }
  }
};
var _0x3c61b3 = _0x42e730;
var _0x18ad5a = (0, _0x31f1af.A)(_0x3c61b3, _0x405b9f, _0x409730, false, null, null, null);
var _0x3998b9 = _0x18ad5a.exports;
function _0xde72ba() {
  var _0x183a31 = this;
  var _0x12eff7 = _0x183a31._self._c;
  return _0x12eff7("div", {
    class: _0x183a31.curSceneConfig.klass + "-scene"
  }, [_0x12eff7("div", {
    staticClass: "magic-house-notice"
  }, [_0x183a31._v("魔法师-芙蕾娅正在修炼魔法...")])]);
}
var _0x200bed = [];
var _0x4a5de7 = {
  name: "MagicHouse",
  props: ["curSceneConfig"]
};
var _0x3afc23 = _0x4a5de7;
var _0x58e559 = (0, _0x31f1af.A)(_0x3afc23, _0xde72ba, _0x200bed, false, null, null, null);
var _0x3a2a04 = _0x58e559.exports;
var _0x2a0572 = {
  name: "townScene",
  props: ["curSceneConfig"],
  data() {
    return {
      curTab: null
    };
  },
  computed: {
    showGoldCoin() {
      return ["exchange", "wareHouse", "groceryStore", "smithy", "petTemple", "palace"].includes(this.curSceneConfig.name);
    },
    showPrestige() {
      return ["groceryStore", "wareHouse", "smithy"].includes(this.curSceneConfig.name);
    },
    showCrystal() {
      return ["mysteryStore", "wareHouse", "palace"].includes(this.curSceneConfig.name);
    }
  },
  methods: {
    hyphenate: _0x15c4fa.Tg,
    handleTabClick(_0x489e23) {
      if (_0x489e23.name !== this.curTab.name) {
        this.curTab = _0x489e23;
      }
    }
  },
  created() {
    this.curTab = this.curSceneConfig.tabs[0] || null;
  },
  components: {
    WareHouse: _0x4567d1,
    BulletinBoard: _0x2f0f0f,
    Pasture: _0x5295be,
    GroceryStore: _0x232be0,
    Palace: _0x2d8326,
    Exchange: _0xb0c799,
    MysteryStore: _0xdec42e,
    PetTemple: () => require.e(964).then(require.bind(require, 70964)),
    Smithy: () => require.e(694).then(require.bind(require, 45694)),
    FamilyTemple: _0x49b668,
    Mokaz: _0x3998b9,
    MagicHouse: _0x3a2a04
  }
};
var _0x374560 = _0x2a0572;
var _0x38b525 = (0, _0x31f1af.A)(_0x374560, _0x35abce, _0x403a3d, false, null, null, null);
var _0x26a915 = _0x38b525.exports;
var _0x16bded = {
  name: "CentralTown",
  props: ["curSide"],
  data() {
    return {
      townMaps: _0x360245._L,
      townCur: null,
      sceneList: _0x360245.PE,
      sceneCur: null
    };
  },
  computed: {
    townSceneList() {
      const {
        townCur: _0x154da2,
        sceneList: _0x3a30d8
      } = this;
      return _0x3a30d8.filter(_0x232a17 => _0x232a17.belong === _0x154da2.name);
    },
    townClasses() {
      return ["central-town", this.townCur.klass];
    }
  },
  methods: {
    arrClick(_0x39e70f) {
      const _0x4743db = _0x39e70f === 0 ? 1 : -1;
      let {
        townMaps: _0x29418a,
        townCur: _0x3b336b
      } = this;
      let _0x3200f9 = _0x29418a.find(_0x226ebb => _0x226ebb.sort === _0x3b336b.sort + _0x4743db);
      if (_0x3200f9) {
        this.townCur = _0x3200f9;
      }
    },
    sceneClick(_0x1cb436) {
      this.sceneCur = _0x1cb436;
    },
    leaveScene() {
      this.sceneCur = null;
      this.$gameAlert.resetAlert();
    }
  },
  created() {
    this.townCur = this.townMaps.find(_0x12bbd4 => _0x12bbd4.name === "firstTown");
    this.sceneCur = null;
  },
  components: {
    TownScene: _0x26a915
  },
  watch: {
    curSide(_0x54a0e6, _0x23f337) {
      if (_0x54a0e6.name === "refresh" && _0x23f337.name === "centralTown" || _0x54a0e6.name === "centralTown" && _0x23f337.name !== "centralTown") {
        this.townCur = this.townMaps.find(_0x317953 => _0x317953.name === "firstTown");
        this.sceneCur = null;
      }
      if (_0x54a0e6.name !== "centralTown" && _0x23f337.name === "centralTown") {
        this.townCur = this.townMaps.find(_0x3a7827 => _0x3a7827.name === "firstTown");
        this.sceneCur = null;
      }
    }
  }
};
var _0x3e0e6e = _0x16bded;
var _0xa9a30a = (0, _0x31f1af.A)(_0x3e0e6e, _0x24ca03, _0x5831f8, false, null, null, null);
var _0x4507dd = _0xa9a30a.exports;