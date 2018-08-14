sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("monitor.monitor.controller.View1", {
		_constants_char1: {
			sampleName: "sap.suite.ui.commons.sample.ChartContainerSimpleToolbar",
			vizFrame: {
				id: "chartContainerVizFrame",
				dataset: {
					dimensions: [{
						name: "VSP",
						value: "{NAME_VSP}"
					}],
					measures: [{
						name: "QUA",
						value: "{QUANTITY}"
					}],
					data: {
						path: "/V_FACT"
					}
				},
				type: "column",
				isTimeSeries: "false",
				properties: {
					plotArea: {
						showGap: false,
						colorPalette: [
							"#009966",
							"#FFA500"
						],
						isRoundCorner: true,
						animation: {
							dataLoading: true
						},
						drawingEffect: sap.viz.ui5.types.VerticalBar_drawingEffect.glossy
					},
					title: {
						text: "",
						visible: false
					},
					legend: {
						visible: false
					},
					dataLabel: {
						visible: true
					},
					categoryAxis: {
						title: {
							text: "\u0412\u0421\u041F",
							visible: false
						},
						visible: true,
						label: {
							angle: "30"
						}
					},
					yAxis: {
						title: {
							visible: false
						}
					}
				},
				feedItems: [{
					"uid": "primaryValues",
					"type": "Measure",
					"values": ["QUA"]
				}, {
					"uid": "axisLabels",
					"type": "Dimension",
					"values": ["VSP"]
				}]
			}
		},
		_constants_char2: {
			sampleName: "sap.suite.ui.commons.sample.ChartContainerSimpleToolbar2",
			vizFrame: {
				id: "chartContainerVizFrame2",
				dataset: {
					dimensions: [{
						name: "DATE",
						value: {
							path: "FOR_DATE",
							//type: new sap.ui.model.type.Date(),
							type: new sap.ui.model.type.Date({
									pattern: "dd.MM"
								}) //formatOptions: { style: "small" }
								//formatter: function(d){ return sap.ui.core.format.DateFormat.getInstance({style: "medium"}).format(new Date(d)); }
						} //value: "{FOR_DATE}",
						//dataType: "date"
					}],
					measures: [{
						name: "QUA",
						value: "{QUANTITY}"
					}],
					data: {
						path: "/V_FORECAST"
					}
				},
				type: "line",
				isTimeSeries: true,
				properties: {
					plotArea: {
						showGap: false,
						colorPalette: [
							"#009966",
							"#FFA500"
						],
						isRoundCorner: true,
						animation: {
							dataLoading: true
						},
						drawingEffect: sap.viz.ui5.types.VerticalBar_drawingEffect.glossy,
						isFixedDataPointSize: false,
						window: {
							start: "8-9-2019",
							//new Date(2018, 8, 1),
							end: null
						}
					},
					title: {
						text: "",
						visible: false
					},
					legend: {
						visible: false
					},
					dataLabel: {
						visible: true
					},
					categoryAxis: {
						title: {
							text: "\u0414\u0430\u0442\u0430",
							visible: false
						},
						visible: true,
						label: {
							angle: "30"
						}
					},
					yAxis: {
						title: {
							visible: false
						} //},
						//timeAxis: {
						//	scale: {
						//		fixedRange: true,
						//		start: 1531180800000
						//	}
					}
				},
				feedItems: [{
					"uid": "primaryValues",
					"type": "Measure",
					"values": ["QUA"]
				}, {
					"uid": "axisLabels",
					"type": "Dimension",
					"values": ["DATE"]
				}]
			}
		},
		_constants_char3: {
			sampleName: "sap.suite.ui.commons.sample.ChartContainerSimpleToolbar",
			vizFrame: {
				id: "chartContainerVizFrame3",
				dataset: {
					dimensions: [{
						name: "R_TYPE",
						value: "{R_TEXT}"
					}],
					measures: [{
						name: "QUA",
						value: "{QUANTITY}"
					}],
					data: {
						path: "/V_RESERVE"
					}
				},
				type: "pie",
				properties: {
					plotArea: {
						colorPalette: [
							"#009966",
							"#ffffbf",
							"#f0897d",
							"#85bdde"
						],
						isRoundCorner: true,
						animation: {
							dataLoading: true
						},
						drawingEffect: sap.viz.ui5.types.VerticalBar_drawingEffect.glossy
					},
					title: {
						text: "",
						visible: false
					},
					legend: {
						visible: true
					},
					dataLabel: {
						visible: true
					}
				},
				feedItems: [{
					"uid": "size",
					"type": "Measure",
					"values": ["QUA"]
				}, {
					"uid": "color",
					"type": "Dimension",
					"values": ["R_TYPE"]
				}]
			}
		},
		_constants_char4: {
			sampleName: "sap.suite.ui.commons.sample.ChartContainerSimpleToolbar4",
			vizFrame: {
				id: "chartContainerVizFrame4",
				dataset: {
					dimensions: [{
						name: "DATE",
						value: {
							path: "PL_DATE",
							type: new sap.ui.model.type.Date({
								pattern: "dd.MM"
							})
						}
					}],
					measures: [{
						name: "QUA",
						value: "{QUANTITY}"
					}],
					data: {
						path: "/V_PLAN"
					}
				},
				type: "line",
				isTimeSeries: true,
				properties: {
					plotArea: {
						showGap: false,
						colorPalette: [
							"#FFA500",
							"#009966"
						],
						isRoundCorner: true,
						animation: {
							dataLoading: true
						},
						drawingEffect: sap.viz.ui5.types.VerticalBar_drawingEffect.glossy,
						isFixedDataPointSize: false,
						window: {
							start: "8-9-2019",
							//new Date(2018, 8, 1),
							end: null
						}
					},
					title: {
						text: "",
						visible: false
					},
					legend: {
						visible: false
					},
					dataLabel: {
						visible: true
					},
					categoryAxis: {
						title: {
							text: "\u0414\u0430\u0442\u0430",
							visible: false
						},
						visible: true,
						label: {
							angle: "30"
						}
					},
					yAxis: {
						title: {
							visible: false
						} //},
						//timeAxis: {
						//	scale: {
						//		fixedRange: true,
						//		start: 1531180800000
						//	}
					}
				},
				feedItems: [{
					"uid": "primaryValues",
					"type": "Measure",
					"values": ["QUA"]
				}, {
					"uid": "axisLabels",
					"type": "Dimension",
					"values": ["DATE"]
				}]
			}
		},
		onInit: function () {
			var sUrl = "/cooler/iot/iot.xsodata";
			var oModel = new sap.ui.model.odata.ODataModel(sUrl, {
				useBatch: false
			});
			this.getView().setModel(oModel);
			var oVizFrame = this.getView().byId(this._constants_char1.vizFrame.id);
			this._updateVizFrame(oVizFrame, this._constants_char1);
			var oVizFrame2 = this.getView().byId(this._constants_char2.vizFrame.id);
			this._updateVizFrame(oVizFrame2, this._constants_char2);
			var aFilters = [];
			var today = new Date();
			var enddate = new Date();
			enddate.setDate(today.getDate() + 7);
			aFilters.push(new sap.ui.model.Filter("FOR_DATE", sap.ui.model.FilterOperator.BT, today, enddate));
			oVizFrame2.getDataset().getBinding("data").filter(aFilters);
			var oVizFrame3 = this.getView().byId(this._constants_char3.vizFrame.id);
			this._updateVizFrame(oVizFrame3, this._constants_char3);
			var oVizFrame4 = this.getView().byId(this._constants_char4.vizFrame.id);
			this._updateVizFrame(oVizFrame4, this._constants_char4);
			aFilters = [];
			aFilters.push(new sap.ui.model.Filter("PL_DATE", sap.ui.model.FilterOperator.BT, today, enddate));
			oVizFrame4.getDataset().getBinding("data").filter(aFilters);
			setInterval(jQuery.proxy(function(){
    			//this.getView().getModel().refresh(true);
				this.getView().byId(this._constants_char1.vizFrame.id).getModel().refresh(true);
			},this),1000); //1000 for every 10 sec.			
			/*oModel.read(
        		"/IOT_FACT",
        		null, [],
        		true,
        		function(oData, oResponse) {
        			var output = JSON.stringify(oResponse.results);
            		//var oItem = new sap.ui.core.ListItem({text : "{ProductName}"});
            		//var oJSModel = new sap.ui.model.json.JSONModel(oData);
            		//oListBox.setModel(oJSModel,"myModel");
            		//oListBox.bindAggregation("items", { path:"myModel>/items", template : oItem });
        		},
        		function (oError) {
            		sap.ui.commons.MessageBox.alert("Error ! Username is not found !");
        		}
        	);
        	*/
			/*			this.myName = "Jon Doe";
			            var oViewModel = new sap.ui.model.json.JSONModel({myName: this.myName});
			            this.getView().setModel(oViewModel,"view");
			*/
		},
		_updateVizFrame: function (vizFrame, vizconst) {
			var oVizFrame = vizconst.vizFrame;
			var sUrl = "/cooler/iot/iot.xsodata";
			var oModel = new sap.ui.model.odata.ODataModel(sUrl, {
				useBatch: false
			});
			var oDataset = new sap.viz.ui5.data.FlattenedDataset(oVizFrame.dataset);
			vizFrame.setVizProperties(oVizFrame.properties);
			vizFrame.setDataset(oDataset);
			vizFrame.setModel(oModel);
			this._addFeedItems(vizFrame, oVizFrame.feedItems);
			vizFrame.setVizType(oVizFrame.type);
		},
		_addFeedItems: function (vizFrame, feedItems) {
			for (var i = 0; i < feedItems.length; i++) {
				vizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem(feedItems[i]));
			}
		},
		/**
		 *@memberOf monitor.monitor.controller.View1
		 */
		action: function (oEvent) {
			var that = this;
			var actionParameters = JSON.parse(oEvent.getSource().data("wiring").replace(/'/g, "\""));
			var eventType = oEvent.getId();
			var aTargets = actionParameters[eventType].targets || [];
			aTargets.forEach(function (oTarget) {
				var oControl = that.byId(oTarget.id);
				if (oControl) {
					var oParams = {};
					for (var prop in oTarget.parameters) {
						oParams[prop] = oEvent.getParameter(oTarget.parameters[prop]);
					}
					oControl[oTarget.action](oParams);
				}
			});
			var oNavigation = actionParameters[eventType].navigation;
			if (oNavigation) {
				var oParams = {};
				(oNavigation.keys || []).forEach(function (prop) {
					oParams[prop.name] = encodeURIComponent(JSON.stringify({
						value: oEvent.getSource().getBindingContext(oNavigation.model).getProperty(prop.name),
						type: prop.type
					}));
				});
				if (Object.getOwnPropertyNames(oParams).length !== 0) {
					this.getOwnerComponent().getRouter().navTo(oNavigation.routeName, oParams);
				} else {
					this.getOwnerComponent().getRouter().navTo(oNavigation.routeName);
				}
			}
		}
	});
});