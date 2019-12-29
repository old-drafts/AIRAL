const getPixels = require('get-pixels');
//-------------------------------------------------
var pashe=1;
var colorLibrary= [
    [
        [143,119,72,'planks'],//亮
        [123,102,62,'planks'],//normal
        [100,84,50,'planks'],//暗
    ],
    [
        [112,112,112,'stone'],//亮
        [96,96,96,'stone'],//normal
        [79,79,79,'stone'],//暗
    ],
    [
        [255,255,255,'concrete'],
        [220,220,220,'concrete'],
        [180,180,180,'concrete'],
    ],
    [
        [216,127,51,'concrete 1'],
        [186,109,44,'concrete 1'],
        [152,89,36,'concrete 1'],
    ],
    [
        [178,76,216,'concrete 2'],
        [153,65,186,'concrete 2'],
        [125,53,152,'concrete 2'],
    ],
    [
        [102,153,216,'concrete 3'],
        [88,132,186,'concrete 3'],
        [72,108,152,'concrete 3'],
    ],
    [
        [229,229,51,'concrete 4'],
        [197,197,44,'concrete 4'],
        [161,161,36,'concrete 4'],
    ],
    [
        [127,204,25,'concrete 5'],
        [109,176,21,'concrete 5'],
        [89,144,17,'concrete 5'],
    ],
    [
        [242,127,165,'concrete 6'],
        [208,109,142,'concrete 6'],
        [170,89,116,'concrete 6'],
    ],
    [
        [76,76,76,'concrete 7'],
        [65,65,65,'concrete 7'],
        [53,53,53,'concrete 7'],
    ],
    [
        [153,153,153,'concrete 8'],
        [132,132,132,'concrete 8'],
        [108,108,108,'concrete 8'],
    ],
    [
        [76,127,153,'concrete 9'],
        [65,109,132,'concrete 9'],
        [53,89,108,'concrete 9'],
    ],
    [
        [127,63,178,'concrete 10'],
        [109,54,153,'concrete 10'],
        [89,44,125,'concrete 10'],
    ],
    [
        [51,76,178,'concrete 11'],
        [44,65,153,'concrete 11'],
        [36,53,125,'concrete 11'],
    ],
    [
        [102,76,51,'concrete 12'],
        [88,65,44,'concrete 12'],
        [72,53,36,'concrete 12'],
    ],
    [
        [102,127,51,'concrete 13'],
        [88,109,44,'concrete 13'],
        [72,89,36,'concrete 13'],
    ],
    [
        [153,51,51,'concrete 14'],
        [132,44,44,'concrete 14'],
        [108,36,36,'concrete 14'],
    ],
    [
        [25,25,25,'concrete 15'],
        [21,21,21,'concrete 15'],
        [17,17,17,'concrete 15'],
    ],
    [
        [153,51,51,'brick_block'],
        [132,44,44,'brick_block'],
        [108,36,36,'brick_block'],
    ],
    [
        [0,124,0,'dried_kelp_block'],
        [0,106,0,'dried_kelp_block'],
        [0,87,0,'dried_kelp_block'],
    ],
    [
        [0,217,58,'emerald_block'],
        [0,187,50,'emerald_block'],
        [0,153,40,'emerald_block'],
    ],
    [
        [167,167,167,'iron_block'],
        [144,144,144,'iron_block'],
        [117,117,117,'iron_block'],
    ],
    [
        [250,238,77,'gold_block'],
        [215,205,66,'gold_block'],
        [176,168,54,'gold_block'],
    ],
    [
        [92,219,213,'diamond_block'],
        [79,188,183,'diamond_block'],
        [64,154,150,'diamond_block'],
    ],
    [
        [74,128,255,'lapis_block'],
        [63,110,220,'lapis_block'],
        [52,90,180,'lapis_block'],
    ],
    [
        [255,252,245,'quartz_block'],
        [220,217,211,'quartz_block'],
        [180,177,172,'quartz_block'],
    ],
    [
        [127,178,56,'slime'],
        [109,153,48,'slime'],
        [89,125,39,'slime'],
    ],
    [
        [112,2,0,'nether_brick'],
        [96,1,0,'nether_brick'],
        [79,1,0,'nether_brick'],
    ],
    [
        [164,168,184,'clay'],
        [141,144,158,'clay'],
        [115,118,129,'clay'],
    ],
    [
        [146,188,88,'grass'],
        [125,162,75,'grass'],
        [103,132,62,'grass'],
    ],
    [
        [247,233,163,'end_stone'],
        [213,201,140,'end_stone'],
        [174,165,115,'end_stone'],
    ],
    [
        [225,188,94,'glowstone'],
        [220,162,81,'glowstone'],
        [180,132,66,'glowstone'],
    ],
    [
        [143,83,51,'redstone_lamp'],
        [123,71,44,'redstone_lamp'],
        [100,58,36,'redstone_lamp'],
    ],
    [
        [255,0,0,'redstone_block'],
        [220,0,0,'redstone_block'],
        [180,0,0,'redstone_block'],
    ],
    [
        [151,109,77,'dirt 1'],
        [130,94,66,'dirt 1'],
        [106,76,54,'dirt 1'],
    ],
    [
        [63,92,24,'leaves'],
        [55,79,21,'leaves'],
        [45,64,17,'leaves'],
    ],
    [
        [69,90,46,'leaves 2'],
        [59,77,39,'leaves 2'],
        [48,63,32,'leaves 2'],
    ],
    [
        [52,82,52,'leaves 1'],
        [45,71,45,'leaves 1'],
        [37,58,37,'leaves 1'],
    ],
    [
        [160,160,255,'packed_ice'],
        [138,138,220,'packed_ice'],
        [112,112,180,'packed_ice'],
    ]
    ];
finish = false;

function getColors(r, g, b) {
    colorList = [];
    for (var i = 0; i < colorLibrary.length; i++) {
        R = r - colorLibrary[i][1][0];
        G = g - colorLibrary[i][1][1];
        B = b - colorLibrary[i][1][2];
        colorList.push(Math.abs(R) + Math.abs(G) + Math.abs(B));
    }
    colorLib = colorLibrary[(colorList.indexOf(Math.min.apply(null, colorList)))];
    return colorLib[1][3];
}

function getColors2(r, g, b) {
    colorList = [];
    for (var i = 0; i < colorLibrary.length; i++) {
        R = r - colorLibrary[i][1][0];
        G = g - colorLibrary[i][1][1];
        B = b - colorLibrary[i][1][2];
        colorList.push(Math.abs(R) + Math.abs(G) + Math.abs(B));
    }
    colorLib = colorLibrary[(colorList.indexOf(Math.min.apply(null, colorList)))];
    return colorLib[1];
}
function floydSteinberg(sb, w, h) {
    for (var i = 0; i < h; i++)
        for (var j = 0; j < w; j++) {
            var ci = i * w + j;
            var ccR = sb[ci][0];
            var ccG = sb[ci][1];
            var ccB = sb[ci][2];
            var rcR = (getColors2(sb[ci][0], sb[ci][1], sb[ci][2]))[0];
            var rcG = (getColors2(sb[ci][0], sb[ci][1], sb[ci][2]))[1];
            var rcB = (getColors2(sb[ci][0], sb[ci][1], sb[ci][2]))[2];
            var errR = ccR - rcR;
            var errG = ccG - rcG;
            var errB = ccB - rcB;
            sb[ci][0] = rcR;
            sb[ci][1] = rcG;
            sb[ci][2] = rcB;
            if (j + 1 < w) {
                sb[ci + 1][0] += (errR * 7) / 16;
                sb[ci + 1][1] += (errG * 7) / 16;
                sb[ci + 1][2] += (errB * 7) / 16;
            }
            if (i + 1 == h) {
                continue;
            }
            if (j > 0) {
                sb[ci + w - 1][0] += (errR * 3) / 16;
                sb[ci + w - 1][1] += (errG * 3) / 16;
                sb[ci + w - 1][2] += (errB * 3) / 16;
                sb[ci + w][0] += (errR * 5) / 16;
                sb[ci + w][1] += (errG * 5) / 16;
                sb[ci + w][2] += (errB * 5) / 16;
            }
            if (j + 1 < w) {
                sb[ci + w + 1][0] += (errR * 1) / 16;
                sb[ci + w + 1][1] += (errG * 1) / 16;
                sb[ci + w + 1][2] += (errB * 1) / 16;
            }
        }
}

function chunksBuild(cmdList, w, h, num,session ) {
    var emm = w / num;
    var paintList2 = [];
    var emmm = 0;
    if (w % num != 0) {
        emm = parseInt(emm) + 1
        //console.log(3)
    }
    for (var we = 0; we < emm; we++) {
        for (var i = 0; i < h; i++) {
            if (we == emm - 1) {
                cc = w % num;
                for (var j = emmm; j < emmm + cc; j++) {
                    var ci = i * w + j;
                    paintList2.push(cmdList[ci]);
                }
            } else {
                for (var j = emmm; j < emmm + num; j++) {
                    // console.log(j)
                    var ci = i * w + j;
                    paintList2.push(cmdList[ci]);
                }
            }
            if (i % (num) == 0) {
                if (we == emm - 1) {
					cc = w % num;
					/*let Sender = setInterval(() => {
						paintList2.push('tp @s ' + (Number(cmdList[ci].split(' ')[1]) - Number(parseInt(cc / 2))) + ' ' + (Number(cmdList[ci].split(' ')[2])+1) + ' ' + (Number(cmdList[ci].split(' ')[3]) + Number(parseInt(cc / 2))));
					},time);*/
                }else{
					/*let Sender = setInterval(() => {
						paintList2.push('tp @s ' + (Number(cmdList[ci].split(' ')[1]) - Number(parseInt(num / 2))) + ' ' + (Number(cmdList[ci].split(' ')[2])+1) + ' ' + (Number(cmdList[ci].split(' ')[3]) + Number(parseInt(num / 2))));
                    //console.log(('tp @s ' + ((cmdList[ci].split(' ')[1]) - parseInt(num / 2)) + ' ' + cmdList[ci].split(' ')[2] + ' ' + ((cmdList[ci].split(' ')[3]) )))
                    paintList2.push('give @s map ');
					},time);*/
                }
            }
        }
        /*paintList2.push('tp @s ' + cmdList[ci].split(' ')[1] + ' ' + cmdList[ci].split(' ')[2] + ' ' + (cmdList[ci].split(' ')[3] - (h - 1)));
        paintList2.push('give @s map ');*/
        emmm = emmm + num;
    }
    //console.log(cmdList)
    paintLock = true;
    return paintList2;
}


var paint = (path, session, mode, Continue) => {
    getPixels(path, function(err, pixels) {
        if (err) {
            session.tellraw(err);
            return err;
        }
        if (!err) {
            pixelsData = pixels.data;
            session.tellraw("§bLoading image...");
            var paintWidth = pixels.shape[0];
            var paintLength = pixels.shape[1];
            var pixelsData1 = [];
            var pixelsData2 = [];
            pixelsGray = []
            for (var group = 0; group < pixelsData.length; group++) {
                pixelsData1.push(pixelsData[group]);
                if (group != 0 && (group + 1) % 4 == 0) {
                    pixelsData2.push(pixelsData1);
                    pixelsData1 = [];
                }
            }
            paintBlockAll = [];
            paintBlockList = [];
            paintBlockDataList = [];
            if(mode == 'dither'){
                floydSteinberg(pixelsData2, pixels.shape[0], pixels.shape[1]);
            }
            for (var rgb1 = 0; rgb1 < pixelsData2.length; rgb1++) {
                paintBlockList.push(getColors(pixelsData2[rgb1][0], pixelsData2[rgb1][1], pixelsData2[rgb1][2]));
            }

            paintBlockPos = 0;
            var paintList = [];
            paintPosX = x;
            paintPosY = y;
            paintPosZ = z;
            for (var paintZ = 0; paintZ < paintLength; paintZ++) {
                for (var paintX = 0; paintX < paintWidth; paintX++) {
                    paintList.push('setblock ' + (paintPosX + paintX) + ' ' + paintPosY + ' ' + (paintPosZ + paintZ) + ' ' + paintBlockList[paintBlockPos]);
                    paintBlockPos++
                }
			}
            paintList = chunksBuild(paintList, pixels.shape[0], pixels.shape[1], pashe + 1);
            if (paintLock == true) {
                session.sendCommandQueue(paintList, 0, [], path,mode, Continue);
            }
        }
    })
}
paint.connect = "Paint script is loading..."
//--------------------------------
var rp=[],rptop=0;
function rpadd(addstring){
    rp[rptop++]=addstring;
}
function rpfind(searchstring){
    for(let i=0;i<=rptop;i++){
        if(rp[i]==searchstring)
            return i;
    }
    return -1;
}
function rpdel(delstring){
    let mod=find(delstring);
    if(mod==-1)return mod;
    else{
        rp[mod]="";
        return 1;
    }
}
function rpclean(){
    for(let i=0;i<=rptop;i++)
        rp[i]="";
}
function rplist(session){
    let liststr="";
    for(let i=0;i<=rptop-1;i++)
        liststr=liststr+rp[i]+" ";
    session.sendCommand(`say ${liststr}`,()=>{});
}
//-----------------------------------
var nodt=[],nodptop=0;
function nodpadd(addstring){
    nodt[nodptop++]=addstring;
}
function nodpfind(searchstring){
    for(let i=0;i<=nodptop;i++){
        if(nodt[i]==searchstring)
            return i;
    }
    return -1;
}
function nodpdel(delstring){
    let mod=find(delstring);
    if(mod==-1)return mod;
    else{
        nodt[mod]="";
        return 1;
    }
}
function nodpclean(){
    for(let i=0;i<=nodptop;i++)
        nodt[i]="";
}
function nodplist(session){
    let liststr="";
    for(let i=0;i<=nodptop-1;i++)
        liststr=liststr+nodp[i]+" ";
    session.sendCommand(`say ${liststr}`,()=>{});
}
const MeoWS=require('./lib');
const WSServer = MeoWS.WSServer;
const BuildSession = MeoWS.BuildSession;
let wss = new WSServer(23333);
const fs = require('fs')
start = false;
var time=0;
var mcfun = (path,session) => {
    fs.readFile(path,(err,data) => {
    if(err){session.tellraw(err)}
       console.log(data.toString());
       var command = data.toString().split('\n');
       if(command[command.length-1] ==' '){
        command.splice(command.length-1,1);
    }
    for(var c =0;c<command.length;c++){
        command[c] =`execute @s ${x} ${y} ${z} ${command[c]}`;
        start = true
    }
    console.log(command);
    if(start == true){
        session.sendCommandQueue(command,time,[]);
    }
})
}
mcfun.connection = 'Loading...'
const Schematic = require('mc-schematic')('1.8');
var schCmdList = [];
var schematic = (schep, session) => {
    fs.readFile(schep, (err, data) => {
        if (err)session.tellraw("§b" + err);
        if (!err) {
            schCmdList = [];
            Schematic.parse(data, (err, schem) => {
                if (err) {
                    session.tellraw('§b' + err);
                }
                if (!err) {
                    schedata = schem;
                    schePosX = x;
                    schePosY = y;
                    schePosZ = z;
                    if (schedata !== undefined) {
                        for (xx = 0; xx < schedata._.Width; xx++) {
                            for (yy = 0; yy < schedata._.Height; yy++) {
                                for (zz = 0; zz < schedata._.Length; zz++) {
                                    if (schedata.getBlock(xx, yy, zz).name != "air" && schedata.getBlock(xx, yy, zz).name != "") {
										let fc=find(schedata.getBlock(xx, yy, zz).name);
										if(fc==-1)schCmdList.push("setblock " + (schePosX + xx) + " " + (schePosY + yy) + " " + (schePosZ + zz) + " " + schedata.getBlock(xx, yy, zz).name + " " + schedata.getBlock(xx, yy, zz).metadata);
                                    }
                                }
                            }
						}
                        session.sendCommandQueue(schCmdList, time, []);
                    }
                    if (schedata == undefined) {
                        session.tellraw('Error');
                    }
                }
            })
        }
    })
}
schematic.connect = "Loading... "
var x=0,y=0,z=0,block="unknow";
/*var user=[],usertrue=false;
user[0]="YI哥";
user[1]="我就喜欢柠檬";
user[2]="庄主一观众";
function userfind(userstring){
    for(let i=0;i<3;i++)
        if(user[i]==userstring)
            return 1;
    return 0;
}*/
wss.on('client', async (session, request) => {
	await new Promise((d)=>{setTimeout(d,1000);});
	console.log(`FastBuilder AirAL by dongdeng`);
	session.tellraw('AirAL CTD');
	BuildSession.createAndBind(session);
	session.on('onMessage',(msg, player)=>{
        let tick=msg.split(" ");
		if(tick[0]=="#get"){
			if(tick[1]=="pos")
				session.sendCommand("testforblock ~~~ air",(back)=>{
					x=back.position.x;
					y=back.position.y;
					z=back.position.z;
					session.tellraw(`AirAL.getpos:${x},${y},${z}`);
				});
			else if(tick[1]=="block")
				session.tellraw(`AirAL.block:${block}`);
			else if(tick[1]=="nowpos")
			session.tellraw(`AirAL.nowpos:${x},${y},${z}`);
		}
		else if(tick[0]=="#set"){
			 	if(tick[1]=="block"){
					 block=tick[2];
					 session.tellraw(`AirAL.setblock:${block}`);
				}
				else if(tick[1]=="pos"){
					x=tick[2]*1;
					y=tick[3]*1;
					z=tick[4]*1;
					session.tellraw(`AirAL.setpos:${x},${y},${z}`);
				}
				else if(tick[1]=="time"){
					time=tick[2]*1;
					session.tellraw(`AirAL.setpos:${time}`);
				}
				else if(tick[1]=="paint"){
					pashe=tick[2]*1;
					session.tellraw(`AirAL.pashe:${pashe}`);
				}
		}
		else if(tick[0]=="#exec"){
			session.sendCommand(msg.substring(5,100),(back)=>{
				console.log(back);
				session.tellraw(`AirAL.exec:${msg.substring(5,100)}`);
			});
		}
		else if(tick[0]=="#function"){
			let path=msg.substring(10,msg.length).trim();
			mcfun(path,session);
		}
		else if(tick[0]=="#sch"){
			let path=msg.substring(5,msg.length).trim();
			schematic(path,session);
		}
		else if(tick[0]=="#nodp"){
			if(tick[1]=="add"){
				nodpadd(tick[2]);
				session.tellraw(`nodp.add:${tick[2]}`);
			}
			else if(tick[1]=="delete"){
				nodpdel(tick[2]);
				session.tellraw(`nodp.delete:${tick[2]}`);
			}
			else if(tick[1]=="list")nodplist(session);
			else if(tick[1]=="clean"){
				nodpclean();
				session.tellraw(`nodp.clean`);
			}
		}
		else if(tick[0]=="#rpck"){
			if(tick[1]=="add"){
				rpadd(msg.substring(6,msg.length));
				session.tellraw(`${msg.substring(6,msg.length)}`);
			}
			else if(tick[1]=="delete"){
				rpdel(msg.substring(6,msg.length));
				session.tellraw(`rpck.delete:${msg.substring(6,msg.length)}`);
			}
			else if(tick[1]=="list")rplist();
			else if(tick[1]=="clean"){
				rpclean();
				session.tellraw(`rpck.clean`);
			}
		}
		else if(tick[0]=="#paint"){
			let pash=msg.substring(7,msg.length);
			paint(pash,session,'normal');
        }
	});
});