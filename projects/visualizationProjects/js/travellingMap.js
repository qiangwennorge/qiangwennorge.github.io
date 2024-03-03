(function(){
    var geoCoordMap = {
          "Asker":        [10.45546817779541, 59.83348846435547],
          "Lierbyen":     [10.2444658, 59.7864096],
          "Larvik":       [10.044932624511711, 59.04088517519034],
          "Hirtshals":    [9.966976901702793, 57.59270341299009],
          "Aalborg":      [9.934061997217372, 57.046942309870275],
          "Kolding":      [9.48148922070291, 55.490632578289365],
          "Flensburg":    [9.436769457881478, 54.78068391453243],
          "Neumünster":   [9.988510581080941, 54.06975820207034],
          "Hamburg":      [10.006784193317326, 53.55287083834183],
          "Bremen":       [8.813386223124425, 53.08351411410029],
          "Groningen":    [6.572300353195364,53.22001756991604],
          "Giethoorn":    [6.077431, 52.741105],
          "Breezanddijk": [5.2094132, 53.0197989],
          "Purmerend":    [4.944441084022282, 52.50567429437229],
          "Amsterdam":    [4.8936041, 52.3727598],
          "Roermond":     [5.9882649, 51.1933903],
          "Düsseldorf":   [6.7763137, 51.2254018],
          "Bruges":       [3.2293221749727508, 51.21109503752351],
          "Brussels":     [4.357388568213132, 50.84722416211933],
          "Aachen":       [6.083772115712889, 50.77624283173932],
          "Cologne":      [6.957962079773221, 50.940641148561525],
          "Hanover":      [9.741827749412959, 52.36887692883818],
          "Copenhagen":   [12.569510999467708, 55.67297222964277],
          "Oslo":         [10.730525753130902, 59.91059787810935],
          "Frederikshavn":[10.5401627477523, 57.440136637467184],
          "Leipzig":      [12.3747329, 51.3406321],
          "Prague":       [14.4464593, 50.0596288],
          "Dresden":      [13.7381437, 51.0493286],
          "Berlin":       [13.3888599,52.5170365],
          "Kongsberg":    [9.6708601, 59.59455],
          "Geilo":        [8.2063719, 60.5345261],
          "Voss":         [6.4101148, 60.6291046],
          "Bergen":       [5.3259192, 60.3943055],
          "Stavanger":    [5.7126114, 59.1020129],
          "Kristiansand": [7.998451343798334, 58.14608699939796],
          "Flåm":         [7.1107496, 60.8579396],
          "Gjøvik":       [10.69437880159073, 60.797155648208616],
          "Lillehammer":  [10.426586, 61.133341],
          "Dombås":       [9.1233739, 62.0748682],
          "Andalsnes":    [7.6867621, 62.5681692],
          "Ålesund":      [6.140593159165562, 62.4706681121343],
          "Molde":        [7.160741850269479, 62.73779376736276],
          "Atlanterhavsveien": [7.342705717309608, 63.01565600356036],
          "Kristiansund": [7.727299757072705, 63.1104920377022],
          "Oppdal":       [9.690851996301681, 62.59374830071553],
          "Trondheim":    [10.3951929, 63.4305658],
          "Tynset":       [10.775059076770482, 62.270432613721276],
          "Elverum":      [11.558862230507092, 60.88305386253837],
          "Hamar":        [11.078488257705498, 60.791077984418386],
          "Karlstad":     [13.5027631, 59.3809146],
          "Örebro":       [15.2151181, 59.2747287],
          "Västerås":     [16.54453518308096, 59.60243036976938],
          "Stockholm":    [18.066195965177492, 59.3245046203015]
        };

    //2017年荷兰之旅
    var oneData = [
          [{name: "Oslo"},{name: "Asker",value: 20}],
          [{name: "Frederikshavn"},{name: "Oslo",value: 20}],
          [{name: "Aalborg"},{name: "Frederikshavn",value: 20}],
          [{name: "Kolding"},{name: "Aalborg",value: 20}],
          [{name: "Flensburg"},{name: "Kolding",value: 20}],
          [{name: "Neumünster"},{name: "Flensburg",value: 20}],
          [{name: "Hamburg"},{name: "Neumünster",value: 20}],
          [{name: "Bremen"},{name: "Hamburg",value: 20}],
          [{name: "Groningen"},{name: "Bremen",value: 20}],
          [{name: "Giethoorn"},{name: "Groningen",value: 20}],
          [{name: "Breezanddijk"},{name: "Giethoorn",value: 20}],
          [{name: "Purmerend"},{name: "Breezanddijk",value: 20}],
          [{name: "Amsterdam"},{name: "Purmerend",value: 20}],
          [{name: "Roermond"},{name: "Amsterdam",value: 20}],
          [{name: "Düsseldorf"},{name: "Roermond",value: 20}],
          [{name: "Bruges"},{name: "Düsseldorf",value: 20}],
          [{name: "Brussels"},{name: "Bruges",value: 20}],
          [{name: "Aachen"},{name: "Brussels",value: 20}],
          [{name: "Cologne"},{name: "Aachen",value: 20}],
          [{name: "Hanover"},{name: "Cologne",value: 20}],
          [{name: "Hamburg"},{name: "Hanover",value: 20}],
          [{name: "Copenhagen"},{name: "Hamburg",value: 20}],
          [{name: "Oslo"},{name: "Copenhagen",value: 20}],
          [{name: "Asker"},{name: "Oslo",value: 20}]
          ];
    //2019年捷克之旅
    var twoData = [
          [{name: "Larvik"},{name: "Lierbyen",value: 20}],
          [{name: "Hirtshals"},{name: "Larvik",value: 20}],
          [{name: "Aalborg"},{name: "Hirtshals",value: 20}],
          [{name: "Kolding"},{name: "Aalborg",value: 20}],
          [{name: "Flensburg"},{name: "Kolding",value: 20}],
          [{name: "Neumünster"},{name: "Flensburg",value: 20}],
          [{name: "Hamburg"},{name: "Neumünster",value: 20}],
          [{name: "Leipzig"},{name: "Hamburg",value: 20}],
          [{name: "Prague"},{name: "Leipzig",value: 20}],
          [{name: "Dresden"},{name: "Prague",value: 20}],
          [{name: "Berlin"},{name: "Dresden",value: 20}],
          [{name: "Aalborg"},{name: "Berlin",value: 20}],
          [{name: "Hirtshals"},{name: "Aalborg",value: 20}],
          [{name: "Larvik"},{name: "Hirtshals",value: 20}],
          [{name: "Lierbyen"},{name: "Larvik",value: 20}]
        ];
    var threeData = [
          [{name: "Kongsberg"},{name: "Lierbyen",value: 20}],
          [{name: "Geilo"},{name: "Kongsberg",value: 20}],
          [{name: "Flåm"},{name: "Geilo",value: 20}],
          [{name: "Voss"},{name: "Flåm",value: 20}],
          [{name: "Bergen"},{name: "Voss",value: 20}],
          [{name: "Stavanger"},{name: "Bergen",value: 20}],
          [{name: "Kristiansand"},{name: "Stavanger",value: 20}],
          [{name: "Lierbyen"},{name: "Kristiansand",value: 20}]
        ];
    var fourData = [
      [{name: "Gjøvik"},{name: "Asker",value: 20}],
      [{name: "Lillehammer"},{name: "Gjøvik",value: 20}],
      [{name: "Dombås"},{name: "Lillehammer",value: 20}],
      [{name: "Andalsnes"},{name: "Dombås",value: 20}],
      [{name: "Ålesund"},{name: "Andalsnes",value: 20}],
      [{name: "Molde"},{name: "Ålesund",value: 20}],
      [{name: "Atlanterhavsveien"},{name: "Molde",value: 20}],
      [{name: "Kristiansund"},{name: "Atlanterhavsveien",value: 20}],
      [{name: "Oppdal"},{name: "Kristiansund",value: 20}],
      [{name: "Trondheim"},{name: "Oppdal",value: 20}],
      [{name: "Tynset"},{name: "Trondheim",value: 20}],
      [{name: "Elverum"},{name: "Tynset",value: 20}],
      [{name: "Hamar"},{name: "Elverum",value: 20}],
      [{name: "Oslo"},{name: "Hamar",value: 20}],
      [{name: "Asker"},{name: "Oslo",value: 20}]
    ];
    var fiveData = [
      [{name: "Oslo"},{name: "Lierbyen",value: 20}],
      [{name: "Karlstad"},{name: "Oslo",value: 20}],
      [{name: "Örebro"},{name: "Karlstad",value: 20}],
      [{name: "Västerås"},{name: "Örebro",value: 20}],
      [{name: "Stockholm"},{name: "Västerås",value: 20}],
      [{name: "Västerås"},{name: "Stockholm",value: 20}],
      [{name: "Örebro"},{name: "Västerås",value: 20}],
      [{name: "Karlstad"},{name: "Örebro",value: 20}],
      [{name: "Oslo"},{name: "Karlstad",value: 20}],
      [{name: "Lierbyen"},{name: "Oslo",value: 20}]
    ];
        // 飞机
        //var planePath ="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
        // 汽车1
        var planePath = "path://M1025.024 780.288l-128 0 0 59.392q0 26.624-18.432 45.056t-45.056 18.432l-64.512 0q-26.624 0-45.056-18.432t-18.432-45.056l0-59.392-384 0 0 59.392q0 26.624-18.944 45.056t-45.568 18.432l-64.512 0q-26.624 0-45.056-18.432t-18.432-45.056l0-59.392-129.024 0 0-201.728q0-57.344 36.352-89.088t91.648-35.84q4.096-17.408 12.8-47.104t18.432-64 20.48-68.608 19.968-60.928q27.648-77.824 115.712-77.824l397.312 0q39.936 0 65.536 22.016t35.84 51.712l21.504 63.488q11.264 34.816 23.04 69.632t22.016 65.024 16.384 46.592q55.296 5.12 91.648 36.864t36.352 88.064l0 201.728zM125.952 648.192q26.624 0 45.568-18.432t18.944-45.056-18.944-45.568-45.568-18.944-45.056 18.944-18.432 45.568 18.432 45.056 45.056 18.432zM793.6 454.656l-37.888-187.392-487.424 0-33.792 187.392 559.104 0zM896 648.192q26.624 0 46.08-19.456t19.456-46.08q0-27.648-19.456-46.592t-46.08-18.944q-27.648 0-46.592 18.944t-18.944 46.592q0 26.624 18.944 46.08t46.592 19.456z"
        // 汽车2

        // 获取地图中起点和终点的坐标，以数组形式保存下来
        var convertData = function(data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[1].name];
            var toCoord = geoCoordMap[dataItem[0].name];
            if (fromCoord && toCoord) {
              res.push({
                fromName: dataItem[1].name,
                toName: dataItem[0].name,
                coords: [fromCoord, toCoord]
              });
            }
          }
          return res;
        };

        var color = ['#a6c84c', '#ffa022', '#46bee9', '#f14aef', '#f05511'];
        var series = [];  // 用来存储地图数据
        //[["Asker", oneData], ["Kolding", twoData], ["Aalborg", threeData]].forEach(function(
        [["Asker", oneData],
         ["Lierbyen", twoData],
         ["Lierbyen", threeData],
         ["Asker", fourData],
         ["Lierbyen", fiveData]
       ].forEach(function(item, i) {
          series.push(
            { // 起始点效果
              name: item[0],
              type: "effectScatter",
              coordinateSystem: "gmap",
              zlevel: 1,
              rippleEffect: {
                brushType: "stroke"
              },
              label: {
                normal: {
                  show: true,
                  position: "right",
                  formatter: "{b}",
                  color: color[i]
                }
              },
              symbolSize: function(val) {
                return val[2] / 6;
              },
              showEffectOn: "render",
              itemStyle: {
                normal: {
                  color: color[i]
                }
              },
              data: [
                {
                  name: item[0],
                  value: geoCoordMap[item[0]].concat([100])
                }
              ]
},
            { //白色航线效果
              name: item[0] + "白色航线",
              type: "lines",
              coordinateSystem: "gmap",
              zlevel: 1,
              effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: color[i],
                symbolSize: 6
              },
              lineStyle: {
                normal: {
                  color: color[i],
                  width: 0,
                  curveness: 0.2
                }
              },
              data: convertData(item[1])
            },
            { //汽车效果
              name: item[0] + "汽车",
              type: "lines",
              coordinateSystem: "gmap",
              zlevel: 2,
              effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
              },
              lineStyle: {
                normal: {
                  color: color[i],
                  width: 1,
                  opacity: 0.8,
                  curveness: 0.2
                }
              },
              data: convertData(item[1])
            },
            { //各节点效果
              name: item[0] + "各节点",
              type: "effectScatter",
              coordinateSystem: "gmap",
              zlevel: 2,
              rippleEffect: {
                brushType: "stroke"
              },
              label: {
                normal: {
                  show: true,
                  position: "right",
                  formatter: "{b}",
                  color: color[i]
                }
              },
              symbolSize: function(val) {
                return val[2] / 2;
              },
              showEffectOn: "render",
              itemStyle: {
                normal: {
                  color: color[i]
                }
              },
              data: item[1].map(function(dataItem) {
                return {
                  name: dataItem[1].name,
                  value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]) // 起点的位置
                };
              })
            }
          );
        });

        var option = {
          title: {
            text: "Wenvenn Car Drive Travelling Map",
            left: "center",
            textStyle: {
              color: "#FFF"
            }
          },
          /*legend: {
            orient: "vertical",
            top: "bottom",
            left: "left",
            data: [{name:"2017 June", icon:"rect"}, {name: "2019 April", icon: "rect"}],
            textStyle: {
              color: "#fff"
            },
            selectedMode: "multiple"
          },*/
          gmap: {
            // 地图中心：丹麦Odense
            //center: [10.388655686234895, 55.39581624258223],
            // 地图中心：瑞典Gøteborg
            center: [11.9670171, 57.7072326],
            // 地图缩放等级，数字越大，放大越大，地图比例尺越小
            zoom: 6,
            renderOnMoving: true,
            // the zIndex of echarts layer for Google Map. `2000` by default.
            echartsLayerZIndex: 2019,
            // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
            roam: true,
            styles: [ //谷歌地图效果 https://developers.google.com/maps/documentation/ios-sdk/style-reference?hl=en
              //{ elementType: "geometry", stylers: [{ color: "#242f3e" }] },
              { elementType: "geometry", stylers: [{color: "#17263c"}]},
              { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
              {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                //stylers: [{ color: "#d59563" }],
                stylers: [{color: "#d0d3d4"}, {lightness: -40}],
              },

              {
                featureType: "administrative.country",
                elementType: "geometry.stroke",
                stylers: [{color: "#fdfefe"}, {lightness: -10}],
              },

              {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }, { visibility: "off" }],
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }, { visibility: "off" }],
              },
              {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }, { visibility: "off" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }, { visibility: "off" }],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }, { visibility: "off" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }, { visibility: "off" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }, { visibility: "off" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }, { visibility: "off" }],
              },
              {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }, { visibility: "off" }],
              },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }, { visibility: "off" }],
              },
              {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }, { visibility: "off" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                //stylers: [{ color: "#17263c" }],
                stylers: [{color: "#3f4049"}],
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
               },
               ]


          },
          //series是在地图上的线条等效果的配置文件
          series: series
        };

  // initialize chart
  var myChart = echarts.init(document.querySelector(".map"));
  myChart.setOption(option);
  // get google map instance
  //var gmap = myChart.getModel().getComponent("gmap").getGoogleMap();
  // Add some markers to map
  //var marker = new google.maps.Marker({ position: gmap.getCenter() });
  //marker.setMap(gmap);
  // Add TrafficLayer to map
  //var trafficLayer = new google.maps.TrafficLayer();
  //trafficLayer.setMap(gmap);
})();
