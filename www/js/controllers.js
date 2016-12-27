angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  var AMapArea = document.getElementById('amap');
  AMapArea.parentNode.style.height="100%";
  $scope.AMapId='container';
  $scope.mapObj;//存放初始化的地图对象
  $scope.initAMap = function(){
    var position = new AMap.LngLat(103.83217335,36.05465038);
    $scope.mapObj = new AMap.Map(
      $scope.AMapId,
      {
        view:new AMap.View2D({
          center:position,
          zoom:13,
          rotation:0
        }),
        lang:'zh_cn'
      }
    );
  }
     
  $scope.addPaths = function(){
    var path = [];
    path.push([103.81715298, 36.05496264]);
    path.push([103.82612228, 36.05440751]);
    path.push([103.83208752, 36.05447691]);
    path.push([103.83882523, 36.05388708]);
    path.push([103.84543419, 36.05267273]);
    path.push([103.84710789, 36.04687828]);

    new AMap.Marker({
      map:$scope.mapObj,
      position:path[0],
      icon:"http://webapi.amap.com/images/0.png",
      offset:new AMap.Pixel(-10,-34)
      // content:m
    });

    new AMap.Marker({
      map:$scope.mapObj,
      position:path[5],
      icon:"http://webapi.amap.com/images/0.png",
      offset:new AMap.Pixel(-10,-34)
      // content:m
    });

    new AMap.Marker({
      map:$scope.mapObj,
      position:[103.83479118, 36.05465038],
      icon:"img/icon-car.png",
      offset:new AMap.Pixel(-10,-20)
      // content:m
    });

    //定义折线对象
    polyline = new AMap.Polyline({
      path:path,     //设置折线的节点数组
      strokeColor:"#F00",
      strokeOpacity:0.5,
      strokeWeight:5,
      strokeDasharray:[10,3]
    });
    polyline.setMap($scope.mapObj);//地图上添加折线            
  }
   
  $scope.ListenClick=function(){
    AMap.event.addListener($scope.mapObj,'click',function(e){
      var lnglat = e.lnglat;
      var marker = new AMap.Marker({
        map:$scope.mapObj,
        position:e.lnglat,
        icon:"http://webapi.amap.com/images/0.png",
        offset:new AMap.Pixel(-10,-34)
        // content:m
      });
      $scope.mapObj.setCenter(lnglat);
    });
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.items = [
    {
      name:'宝福牛肉面',
      address:'城关区雁南路269号（速八酒店楼下）'
    },
    {
      name:'红苹果农家乐山庄',
      address:'城关区桃树坪大洼山村桃园春山庄右侧'
    },
    {
      name:'金城老朋友茶餐厅',
      address:'城关区砂坪村经济小区B区1号楼'
    },
    {
      name:'马宝俊牛肉面馆',
      address:'和正西街26号'
    },
    {
      name:'金城尕老汉餐饮店',
      address:'城关区南城巷23-29号一层001商铺'
    },
    {
      name:'甘肃雨轩餐饮文化发展有限责任公司',
      address:'城关区酒泉路街道酒泉路264-276号3楼'
    },
    {
      name:'城关区酒泉路街道酒泉路264-276号3楼',
      address:'城关区雁滩北面第二新村44号'
    },
    {
      name:'甘肃腾日餐饮有限公司山字石杂粮食府',
      address:'城关区贡元巷街道箭道巷102号'
    },
    {
      name:'明档剁馅鲜饺店',
      address:'城关区新港城C区15号007'
    }
  ];
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.items = [
    {
      name:'吾麦香牛肉面馆',
      address:'城关区广武门街道南城根27-43号',
      status:1
    },
    {
      name:'逯记烧货龙虾餐馆',
      address:'城关区詹家拐子140号',
      status:0
    },
    {
      name:'西部钱柜餐饮休闲有限公司',
      address:'城关区酒泉路35号',
      status:1
    },
    {
      name:'唏嘛香牛肉面馆',
      address:'城关区临夏路195号中广都市丽景',
      status:0
    },
    {
      name:'龙门镇老火锅店',
      address:' 城关区雁儿湾699号12号商铺',
      status:2
    },
    {
      name:'燕姐川味小吃店',
      address:'城关区小沟头84号',
      status:1
    },
    {
      name:'卓雅串串香小吃店',
      address:'城关区和政西街56号',
      status:1
    },
    {
      name:'哎呦喂时尚餐饮店',
      address:'城关区陇西路18号',
      status:0
    },
    {
      name:'华文丹迪酒店',
      address:'城关区张苏滩541号',
      status:2
    }
  ];
})

.controller('EnforcementCtrl', function($scope) {
  $scope.items = [
    {
      name:'废弃油脂违规放置',
      address:'吾麦香牛肉面馆废弃油脂违规放置',
      status:1
    },
    {
      name:'餐厨垃圾违规堆放',
      address:'逯记烧货龙虾餐馆餐厨垃圾随意堆放',
      status:0
    },
    {
      name:'地沟油排放',
      address:'西部钱柜餐饮休闲有限公司门前地沟油随意排放',
      status:1
    },
    {
      name:'粗废油脂堆放',
      address:'唏嘛香牛肉面馆店前垃圾堆放',
      status:3
    },
    {
      name:'地沟油排放',
      address:'龙门镇老火锅店地沟油排放',
      status:2
    },
    {
      name:'粗废油脂堆放',
      address:'燕姐川味小吃店粗废油脂堆放',
      status:1
    },
    {
      name:'餐厨垃圾违规堆放',
      address:'卓雅串串香小吃店餐厨垃圾',
      status:1
    },
    {
      name:'粗废油脂堆放',
      address:'哎呦喂时尚餐饮店粗废油脂堆放',
      status:3
    },
    {
      name:'餐厨垃圾违规堆放',
      address:'华文丹迪酒店餐厨垃圾违规堆放',
      status:2
    }
  ];
});

