﻿(function() {
	'use strict';
	var $asm = {};
	global.SaltarelleJayData = global.SaltarelleJayData || {};
	global.SaltarelleJayData.Example = global.SaltarelleJayData.Example || {};
	ss.initAssembly($asm, 'SaltarelleJayData.Example');
	////////////////////////////////////////////////////////////////////////////////
	// SaltarelleJayData.Example.Program
	var $SaltarelleJayData_Example_$Program = function() {
	};
	$SaltarelleJayData_Example_$Program.__typeName = 'SaltarelleJayData.Example.$Program';
	$SaltarelleJayData_Example_$Program.$main = function() {
		$($SaltarelleJayData_Example_$Program.$run);
	};
	$SaltarelleJayData_Example_$Program.$run = function() {
		var $state = 0, entity, database, $t1, $t2, $t3, entities, $t4, database2, $t5, $t6, entities2;
		var $sm = function() {
			$sm1:
			for (;;) {
				switch ($state) {
					case 0: {
						$state = -1;
						entity = new $SaltarelleJayData_Example_MyEntity();
						entity.jayDataObject.AnotherInt = 77;
						database = new $SaltarelleJayData_Example_Database();
						$t1 = database.ready();
						$state = 1;
						$t1.continueWith($sm);
						return;
					}
					case 1: {
						$state = -1;
						$t1.getResult();
						database.TheBs.jayDataObject.add(entity.jayDataObject);
						$t2 = database.saveChanges();
						$state = 2;
						$t2.continueWith($sm);
						return;
					}
					case 2: {
						$state = -1;
						$t2.getResult();
						$t3 = database.TheBs.where(function(b) {
							return b.jayDataObject.AnotherInt === 77;
						}).toList();
						$state = 3;
						$t3.continueWith($sm);
						return;
					}
					case 3: {
						$state = -1;
						entities = $t3.getResult();
						//x = await database.TheBs.Where(b => b.AnotherInt == 5).ToList();
						//entities[0].AnotherInt= 555;
						//entities[0].BString = "Hello world" + DateTime.Now.ToLocaleTimeString();
						$t4 = database.saveChanges();
						$state = 4;
						$t4.continueWith($sm);
						return;
					}
					case 4: {
						$state = -1;
						$t4.getResult();
						database2 = new $SaltarelleJayData_Example_Database();
						$t5 = database2.ready();
						$state = 5;
						$t5.continueWith($sm);
						return;
					}
					case 5: {
						$state = -1;
						$t5.getResult();
						$t6 = database2.TheBs.toList();
						$state = 6;
						$t6.continueWith($sm);
						return;
					}
					case 6: {
						$state = -1;
						entities2 = $t6.getResult();
						$('#content').html(ss.count(entities2).toString());
						$state = -1;
						break $sm1;
					}
					default: {
						break $sm1;
					}
				}
			}
		};
		$sm();
	};
	////////////////////////////////////////////////////////////////////////////////
	// SaltarelleJayData.Example.MyEntity
	var $SaltarelleJayData_Example_MyEntity = function() {
		JayDataApi.Entity.call(this);
	};
	$SaltarelleJayData_Example_MyEntity.jayDataConstructor = $data.Entity.extend('SaltarelleJayData.Example.MyEntity', { BInt: { type: 'int', key: true, computed: true }, AnotherInt: { type: 'int' }, BString: { type: 'string' } });
	$SaltarelleJayData_Example_MyEntity.__typeName = 'SaltarelleJayData.Example.MyEntity';
	global.SaltarelleJayData.Example.MyEntity = $SaltarelleJayData_Example_MyEntity;
	////////////////////////////////////////////////////////////////////////////////
	// SaltarelleJayData.Example.Database
	var $SaltarelleJayData_Example_Database = function() {
		JayDataApi.EntityContext.call(this, 'TEST3');
		var self = this;
		this.TheBs = new (ss.makeGenericType(JayDataApi.EntitySet$1, [$SaltarelleJayData_Example_MyEntity]))(self.jayDataObject.TheBs);
		this.TheBs = new (ss.makeGenericType(JayDataApi.EntitySet$1, [$SaltarelleJayData_Example_MyEntity]))(this.jayDataObject.TheBs);
	};
	$SaltarelleJayData_Example_Database.jayDataConstructor = $data.EntityContext.extend('SaltarelleJayData.Example.Database', { TheBs: { type: '$data.EntitySet', elementType: 'SaltarelleJayData.Example.MyEntity' } });
	$SaltarelleJayData_Example_Database.__typeName = 'SaltarelleJayData.Example.Database';
	global.SaltarelleJayData.Example.Database = $SaltarelleJayData_Example_Database;
	ss.initClass($SaltarelleJayData_Example_$Program, $asm, {});
	ss.initClass($SaltarelleJayData_Example_Database, $asm, {}, JayDataApi.EntityContext);
	ss.initClass($SaltarelleJayData_Example_MyEntity, $asm, {}, JayDataApi.Entity);
	$SaltarelleJayData_Example_$Program.$main();
})();
