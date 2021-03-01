/*

███████╗███╗   ███╗ ██████╗      ██╗██╗    ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
██╔════╝████╗ ████║██╔═══██╗     ██║██║    ██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
█████╗  ██╔████╔██║██║   ██║     ██║██║    ███████╗██║     ██████╔╝██║██████╔╝   ██║   
██╔══╝  ██║╚██╔╝██║██║   ██║██   ██║██║    ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   
███████╗██║ ╚═╝ ██║╚██████╔╝╚█████╔╝██║    ███████║╚██████╗██║  ██║██║██║        ██║   
╚══════╝╚═╝     ╚═╝ ╚═════╝  ╚════╝ ╚═╝    ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   


Emoji Script
v 4.1
Public Release

Created by Travess Smalley
February 26, 2021

Place this file inside the Photoshop "Scripts" folder:
Adobe Photoshop -> Presets -> Scripts
*This may require admin access & restarting Photoshop

To run the file in Photoshop click:
File -> Scripts -> Emoji Script

Please share and send me any interesting emojis you make :D

  ,-~~-.___.
 / |  '     \         
(  )         0  
 \_/-, ,----'            
    ====           // 
   /  \-'~;    /~~~(O)
  /  __/~|   /       |     
=(  _____| (_________| 

Sincerely, TS

*/


// = Random Number Function = 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// = Make New Document =
var idmake = stringIDToTypeID( "make" );
    var desc12 = new ActionDescriptor();
    var idnew = stringIDToTypeID( "new" );
        var desc13 = new ActionDescriptor();
        var idname = stringIDToTypeID( "name" );
        desc13.putString( idname, """Emoji Script v4.1 by Travess Smalley, 2021""" );
        var idartboard = stringIDToTypeID( "artboard" );
        desc13.putBoolean( idartboard, false );
        var idautoPromoteBackgroundLayer = stringIDToTypeID( "autoPromoteBackgroundLayer" );
        desc13.putBoolean( idautoPromoteBackgroundLayer, false );
        var idmode = stringIDToTypeID( "mode" );
        var idRGBColorMode = stringIDToTypeID( "RGBColorMode" );
        desc13.putClass( idmode, idRGBColorMode );
        var idwidth = stringIDToTypeID( "width" );
        var iddistanceUnit = stringIDToTypeID( "distanceUnit" );
        desc13.putUnitDouble( idwidth, iddistanceUnit, 612.000000 );
        var idheight = stringIDToTypeID( "height" );
        var iddistanceUnit = stringIDToTypeID( "distanceUnit" );
        desc13.putUnitDouble( idheight, iddistanceUnit, 792.000000 );
        var idresolution = stringIDToTypeID( "resolution" );
        var iddensityUnit = stringIDToTypeID( "densityUnit" );
        desc13.putUnitDouble( idresolution, iddensityUnit, 300.000000 );
        var idpixelScaleFactor = stringIDToTypeID( "pixelScaleFactor" );
        desc13.putDouble( idpixelScaleFactor, 1.000000 );
        var idfill = stringIDToTypeID( "fill" );
        var idfill = stringIDToTypeID( "fill" );
        var idwhite = stringIDToTypeID( "white" );
        desc13.putEnumerated( idfill, idfill, idwhite );
        var iddepth = stringIDToTypeID( "depth" );
        desc13.putInteger( iddepth, 8 );
        var idprofile = stringIDToTypeID( "profile" );
        desc13.putString( idprofile, """sRGB IEC61966-2.1""" );
        var idguides = stringIDToTypeID( "guides" );
            var list1 = new ActionList();
        desc13.putList( idguides, list1 );
    var iddocument = stringIDToTypeID( "document" );
    desc12.putObject( idnew, iddocument, desc13 );
    var iddocumentID = stringIDToTypeID( "documentID" );
    desc12.putInteger( iddocumentID, 929 );
executeAction( idmake, desc12, DialogModes.NO );


var randomX1  = (randomNumber(0, 2550));
var randomX2  = (randomNumber(0, 2550));
var randomY1  = (randomNumber(0, 2550));
var randomY2  = (randomNumber(0, 2550));

var randomR1 = (randomNumber(200, 255));
var randomG1 = (randomNumber(200, 255));
var randomB1 = (randomNumber(200, 255));

var randomR2 = (randomNumber(0, 255));
var randomG2 = (randomNumber(0, 255));
var randomB2 = (randomNumber(0, 255));


// ===== Make a New Layer ==========================
var idmake = stringIDToTypeID( "make" );
    var desc799 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref227 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        ref227.putClass( idlayer );
    desc799.putReference( idnull, ref227 );
    var idlayerID = stringIDToTypeID( "layerID" );
    desc799.putInteger( idlayerID, 2 );
executeAction( idmake, desc799, DialogModes.NO );

// ===== Radial Gradient Random  ===========================
var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    var desc690 = new ActionDescriptor();
    var idfrom = stringIDToTypeID( "from" );
        var desc691 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idhorizontal, idpixelsUnit, randomX1 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idvertical, idpixelsUnit, randomY1 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idfrom, idpaint, desc691 );
    var idto = stringIDToTypeID( "to" );
        var desc692 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idhorizontal, idpixelsUnit, randomX2 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idvertical, idpixelsUnit, randomY2 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idto, idpaint, desc692 );
    var idtype = stringIDToTypeID( "type" );
    var idgradientType = stringIDToTypeID( "gradientType" );
    var idradial = stringIDToTypeID( "radial" );
    desc690.putEnumerated( idtype, idgradientType, idradial );
    var iduseMask = stringIDToTypeID( "useMask" );
    desc690.putBoolean( iduseMask, true );
    var idgradient = stringIDToTypeID( "gradient" );
        var desc693 = new ActionDescriptor();
        var idname = stringIDToTypeID( "name" );
        desc693.putString( idname, """Violet, Orange""" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idcustomStops = stringIDToTypeID( "customStops" );
        desc693.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
        var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
        desc693.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
        var idcolors = stringIDToTypeID( "colors" );
            var list108 = new ActionList();
                var desc694 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc695 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc695.putDouble( idred, randomR1 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc695.putDouble( idgrain, randomG1 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc695.putDouble( idblue, randomB1 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc694.putObject( idcolor, idRGBColor, desc695 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc694.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc694.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc694.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc694 );
                var desc696 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc697 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc697.putDouble( idred, randomR2 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc697.putDouble( idgrain, randomG2 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc697.putDouble( idblue, randomB2 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc696.putObject( idcolor, idRGBColor, desc697 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc696.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc696.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc696.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc696 );
        desc693.putList( idcolors, list108 );
        var idtransparency = stringIDToTypeID( "transparency" );
            var list109 = new ActionList();
                var desc698 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc698.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc698.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc698.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc698 );
                var desc699 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc699.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc699.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc699.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc699 );
        desc693.putList( idtransparency, list109 );
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    desc690.putObject( idgradient, idgradientClassEvent, desc693 );
executeAction( idgradientClassEvent, desc690, DialogModes.NO );

// =======================================================
var idmake = stringIDToTypeID( "make" );
    var desc152 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref69 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        ref69.putClass( idlayer );
    desc152.putReference( idnull, ref69 );
    var idlayerID = stringIDToTypeID( "layerID" );
    desc152.putInteger( idlayerID, 11 );
executeAction( idmake, desc152, DialogModes.NO );

var bodyRandom = randomNumber(1,3)
if (bodyRandom == 1){
// ===== Ellipse Body Marquee =============================

// ===== Function to generate random number ===============
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var randomX = (randomNumber(0, 200));
var randomY = (randomNumber(0, 200));


// ===== Make New Layer ================================
var idmake = stringIDToTypeID( "make" );
    var desc152 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref69 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        ref69.putClass( idlayer );
    desc152.putReference( idnull, ref69 );
    var idlayerID = stringIDToTypeID( "layerID" );
    desc152.putInteger( idlayerID, 11 );
executeAction( idmake, desc152, DialogModes.NO );

// ===== Ellipse Body Marquee =============================

var idset = stringIDToTypeID( "set" );
    var desc2400 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref825 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref825.putProperty( idchannel, idselection );
    desc2400.putReference( idnull, ref825 );
    var idto = stringIDToTypeID( "to" );
        var desc2401 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc2401.putUnitDouble( idtop, idpixelsUnit, (2175.000000 + randomY));
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc2401.putUnitDouble( idleft, idpixelsUnit, (-1100.000000 - randomX));
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc2401.putUnitDouble( idbottom, idpixelsUnit, (3625.000000 + randomY));
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc2401.putUnitDouble( idright, idpixelsUnit, (3750.000000  + randomX));
    var idellipse = stringIDToTypeID( "ellipse" );
    desc2400.putObject( idto, idellipse, desc2401 );
executeAction( idset, desc2400, DialogModes.NO );

// ===== Neck - Rectangular Marquee Add to Selection ======

var idaddTo = stringIDToTypeID( "addTo" );
    var desc2408 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref828 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref828.putProperty( idchannel, idselection );
    desc2408.putReference( idnull, ref828 );
    var idto = stringIDToTypeID( "to" );
        var desc2409 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc2409.putUnitDouble( idtop, idpixelsUnit, 1692.000000 );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc2409.putUnitDouble( idleft, idpixelsUnit, 843.000000 );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc2409.putUnitDouble( idbottom, idpixelsUnit, 2474.000000 );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc2409.putUnitDouble( idright, idpixelsUnit, 1766.000000 );
    var idrectangle = stringIDToTypeID( "rectangle" );
    desc2408.putObject( idto, idrectangle, desc2409 );
executeAction( idaddTo, desc2408, DialogModes.NO );

var randomX1  = (randomNumber(0, 2550));
var randomX2  = (randomNumber(0, 2550));
var randomY1  = (randomNumber(0, 2550));
var randomY2  = (randomNumber(0, 2550));

var randomR1 = (randomNumber(0, 255));
var randomG1 = (randomNumber(0, 255));
var randomB1 = (randomNumber(0, 255));

var randomR2 = (randomNumber(0, 255));
var randomG2 = (randomNumber(0, 255));
var randomB2 = (randomNumber(0, 255));

// ===== Radial Gradient Random  ===========================
var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    var desc690 = new ActionDescriptor();
    var idfrom = stringIDToTypeID( "from" );
        var desc691 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idhorizontal, idpixelsUnit, randomX1 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idvertical, idpixelsUnit, randomY1 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idfrom, idpaint, desc691 );
    var idto = stringIDToTypeID( "to" );
        var desc692 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idhorizontal, idpixelsUnit, randomX2 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idvertical, idpixelsUnit, randomY2 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idto, idpaint, desc692 );
    var idtype = stringIDToTypeID( "type" );
    var idgradientType = stringIDToTypeID( "gradientType" );
    var idradial = stringIDToTypeID( "radial" );
    desc690.putEnumerated( idtype, idgradientType, idradial );
    var iduseMask = stringIDToTypeID( "useMask" );
    desc690.putBoolean( iduseMask, true );
    var idgradient = stringIDToTypeID( "gradient" );
        var desc693 = new ActionDescriptor();
        var idname = stringIDToTypeID( "name" );
        desc693.putString( idname, """Violet, Orange""" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idcustomStops = stringIDToTypeID( "customStops" );
        desc693.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
        var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
        desc693.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
        var idcolors = stringIDToTypeID( "colors" );
            var list108 = new ActionList();
                var desc694 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc695 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc695.putDouble( idred, randomR1 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc695.putDouble( idgrain, randomG1 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc695.putDouble( idblue, randomB1 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc694.putObject( idcolor, idRGBColor, desc695 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc694.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc694.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc694.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc694 );
                var desc696 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc697 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc697.putDouble( idred, randomR2 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc697.putDouble( idgrain, randomG2 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc697.putDouble( idblue, randomB2 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc696.putObject( idcolor, idRGBColor, desc697 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc696.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc696.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc696.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc696 );
        desc693.putList( idcolors, list108 );
        var idtransparency = stringIDToTypeID( "transparency" );
            var list109 = new ActionList();
                var desc698 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc698.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc698.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc698.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc698 );
                var desc699 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc699.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc699.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc699.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc699 );
        desc693.putList( idtransparency, list109 );
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    desc690.putObject( idgradient, idgradientClassEvent, desc693 );
executeAction( idgradientClassEvent, desc690, DialogModes.NO );

// ===== Stroke (1/4 chance)=============================

var randomAng = (randomNumber(0, 360));
var randomSat = (randomNumber(0, 100));
var randomBri = (randomNumber(0, 100));
var chance = (randomNumber(1, 4));

var idstroke = stringIDToTypeID( "stroke" );
    var desc2768 = new ActionDescriptor();
    var idwidth = stringIDToTypeID( "width" );
    desc2768.putInteger( idwidth, 20 );
    var idlocation = stringIDToTypeID( "location" );
    var idstrokeLength = stringIDToTypeID( "strokeLength" );
    var idinside = stringIDToTypeID( "inside" );
    desc2768.putEnumerated( idlocation, idstrokeLength, idinside );
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc2768.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idmode = stringIDToTypeID( "mode" );
    var idblendMode = stringIDToTypeID( "blendMode" );
    var idnormal = stringIDToTypeID( "normal" );
    desc2768.putEnumerated( idmode, idblendMode, idnormal );
    var idcolor = stringIDToTypeID( "color" );
        var desc2769 = new ActionDescriptor();
        var idhue = stringIDToTypeID( "hue" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc2769.putUnitDouble( idhue, idangleUnit, randomAng );
        var idsaturation = stringIDToTypeID( "saturation" );
        desc2769.putDouble( idsaturation, randomSat );
        var idbrightness = stringIDToTypeID( "brightness" );
        desc2769.putDouble( idbrightness, randomBri );
    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
    desc2768.putObject( idcolor, idHSBColorClass, desc2769 );
if (chance == 1){
executeAction( idstroke, desc2768, DialogModes.NO );
}

// ===== Subtract From Neck (2/3 chacne)=============================
var neckSub = (randomNumber(-300, 300))
var neckWid = (randomNumber(0, 300))
var chance = (randomNumber(1, 3))
var idsubtractFrom = stringIDToTypeID( "subtractFrom" );
    var desc10 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref8 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref8.putProperty( idchannel, idselection );
    desc10.putReference( idnull, ref8 );
    var idto = stringIDToTypeID( "to" );
        var desc11 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc11.putUnitDouble( idtop, idpixelsUnit, (-487.000000 + neckSub) );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc11.putUnitDouble( idleft, idpixelsUnit, (58.000000 + neckWid) );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc11.putUnitDouble( idbottom, idpixelsUnit, (2787.000000 + neckSub) );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc11.putUnitDouble( idright, idpixelsUnit, (2500.000000 - neckWid) );
    var idellipse = stringIDToTypeID( "ellipse" );
    desc10.putObject( idto, idellipse, desc11 );
if (chance > 1){
executeAction( idsubtractFrom, desc10, DialogModes.NO );
}

var randomX1  = (randomNumber(0, 2550));
var randomX2  = (randomNumber(0, 2550));
var randomY1  = (randomNumber(0, 2550));
var randomY2  = (randomNumber(0, 2550));

var randomR1 = (randomNumber(0, 255));
var randomG1 = (randomNumber(0, 255));
var randomB1 = (randomNumber(0, 255));

var randomR2 = (randomNumber(0, 255));
var randomG2 = (randomNumber(0, 255));
var randomB2 = (randomNumber(0, 255));

// ===== Radial Gradient Random  ===========================
var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    var desc690 = new ActionDescriptor();
    var idfrom = stringIDToTypeID( "from" );
        var desc691 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idhorizontal, idpixelsUnit, randomX1 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idvertical, idpixelsUnit, randomY1 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idfrom, idpaint, desc691 );
    var idto = stringIDToTypeID( "to" );
        var desc692 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idhorizontal, idpixelsUnit, randomX2 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idvertical, idpixelsUnit, randomY2 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idto, idpaint, desc692 );
    var idtype = stringIDToTypeID( "type" );
    var idgradientType = stringIDToTypeID( "gradientType" );
    var idradial = stringIDToTypeID( "radial" );
    desc690.putEnumerated( idtype, idgradientType, idradial );
    var iduseMask = stringIDToTypeID( "useMask" );
    desc690.putBoolean( iduseMask, true );
    var idgradient = stringIDToTypeID( "gradient" );
        var desc693 = new ActionDescriptor();
        var idname = stringIDToTypeID( "name" );
        desc693.putString( idname, """Violet, Orange""" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idcustomStops = stringIDToTypeID( "customStops" );
        desc693.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
        var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
        desc693.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
        var idcolors = stringIDToTypeID( "colors" );
            var list108 = new ActionList();
                var desc694 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc695 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc695.putDouble( idred, randomR1 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc695.putDouble( idgrain, randomG1 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc695.putDouble( idblue, randomB1 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc694.putObject( idcolor, idRGBColor, desc695 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc694.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc694.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc694.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc694 );
                var desc696 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc697 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc697.putDouble( idred, randomR2 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc697.putDouble( idgrain, randomG2 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc697.putDouble( idblue, randomB2 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc696.putObject( idcolor, idRGBColor, desc697 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc696.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc696.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc696.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc696 );
        desc693.putList( idcolors, list108 );
        var idtransparency = stringIDToTypeID( "transparency" );
            var list109 = new ActionList();
                var desc698 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc698.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc698.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc698.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc698 );
                var desc699 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc699.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc699.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc699.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc699 );
        desc693.putList( idtransparency, list109 );
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    desc690.putObject( idgradient, idgradientClassEvent, desc693 );
if (chance > 1){
executeAction( idgradientClassEvent, desc690, DialogModes.NO );
}
// ===== Stroke (1/4 chance)=============================

var randomAng = (randomNumber(0, 360));
var randomSat = (randomNumber(0, 100));
var randomBri = (randomNumber(0, 100));
var chance = (randomNumber(1, 4));

var idstroke = stringIDToTypeID( "stroke" );
    var desc2768 = new ActionDescriptor();
    var idwidth = stringIDToTypeID( "width" );
    desc2768.putInteger( idwidth, 20 );
    var idlocation = stringIDToTypeID( "location" );
    var idstrokeLength = stringIDToTypeID( "strokeLength" );
    var idinside = stringIDToTypeID( "inside" );
    desc2768.putEnumerated( idlocation, idstrokeLength, idinside );
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc2768.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idmode = stringIDToTypeID( "mode" );
    var idblendMode = stringIDToTypeID( "blendMode" );
    var idnormal = stringIDToTypeID( "normal" );
    desc2768.putEnumerated( idmode, idblendMode, idnormal );
    var idcolor = stringIDToTypeID( "color" );
        var desc2769 = new ActionDescriptor();
        var idhue = stringIDToTypeID( "hue" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc2769.putUnitDouble( idhue, idangleUnit, randomAng );
        var idsaturation = stringIDToTypeID( "saturation" );
        desc2769.putDouble( idsaturation, randomSat );
        var idbrightness = stringIDToTypeID( "brightness" );
        desc2769.putDouble( idbrightness, randomBri );
    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
    desc2768.putObject( idcolor, idHSBColorClass, desc2769 );
if (chance == 1){
executeAction( idstroke, desc2768, DialogModes.NO );
}

// ===== De Select ==================================
var idset = stringIDToTypeID( "set" );
    var desc12 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref9 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref9.putProperty( idchannel, idselection );
    desc12.putReference( idnull, ref9 );
    var idto = stringIDToTypeID( "to" );
    var idordinal = stringIDToTypeID( "ordinal" );
    var idnone = stringIDToTypeID( "none" );
    desc12.putEnumerated( idto, idordinal, idnone );
executeAction( idset, desc12, DialogModes.NO );

// ====== Transform (1/4 chance) =================================
var chance = (randomNumber(1, 4));
var skewR = (randomNumber(-5.01, 5.01));
var scaleR = (randomNumber(106.5, 112.5));
var rotR = (randomNumber(-2.10 , 2.10));
if(chance == 1){
var idtransform = stringIDToTypeID( "transform" );
    var desc20 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref14 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref14.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc20.putReference( idnull, ref14 );
    var idfreeTransformCenterState = stringIDToTypeID( "freeTransformCenterState" );
    var idquadCenterState = stringIDToTypeID( "quadCenterState" );
    var idQCSAverage = stringIDToTypeID( "QCSAverage" );
    desc20.putEnumerated( idfreeTransformCenterState, idquadCenterState, idQCSAverage );
    var idoffset = stringIDToTypeID( "offset" );
        var desc21 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc21.putUnitDouble( idhorizontal, idpixelsUnit, 44.320312 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc21.putUnitDouble( idvertical, idpixelsUnit, 0.000000 );
    var idoffset = stringIDToTypeID( "offset" );
    desc20.putObject( idoffset, idoffset, desc21 );
    var idwidth = stringIDToTypeID( "width" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc20.putUnitDouble( idwidth, idpercentUnit, scaleR );
    var idheight = stringIDToTypeID( "height" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc20.putUnitDouble( idheight, idpercentUnit, scaleR );
    var idskew = stringIDToTypeID( "skew" );
        var desc22 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc22.putUnitDouble( idhorizontal, idangleUnit, skewR );
        var idvertical = stringIDToTypeID( "vertical" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc22.putUnitDouble( idvertical, idangleUnit, 0.000000 );
    var idpaint = stringIDToTypeID( "paint" );
    desc20.putObject( idskew, idpaint, desc22 );
    var idangle = stringIDToTypeID( "angle" );
    var idangleUnit = stringIDToTypeID( "angleUnit" );
    desc20.putUnitDouble( idangle, idangleUnit, rotR );
    var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
    var idinterpolationType = stringIDToTypeID( "interpolationType" );
    var idbicubic = stringIDToTypeID( "bicubic" );
    desc20.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubic );
executeAction( idtransform, desc20, DialogModes.NO );
}
// ===== De Select ==================================
var idset = stringIDToTypeID( "set" );
    var desc12 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref9 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref9.putProperty( idchannel, idselection );
    desc12.putReference( idnull, ref9 );
    var idto = stringIDToTypeID( "to" );
    var idordinal = stringIDToTypeID( "ordinal" );
    var idnone = stringIDToTypeID( "none" );
    desc12.putEnumerated( idto, idordinal, idnone );
executeAction( idset, desc12, DialogModes.NO );
} 
if (bodyRandom == 2){
// ===== body02.js =====================================

// ===== Complex Body Marquee ==========================

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var docHeight = 3300
var docWidth = 2550

var shoulderHeight = 2200
var shoulderLeft = 0
var shoulderBottom = (docHeight - shoulderHeight) + docHeight
var shoulderRight = 1000

var addShoulderLeft = docWidth - (shoulderRight - shoulderLeft)
var addShoulderRight = docWidth

// ===== Make New Layer ================================
var idmake = stringIDToTypeID( "make" );
    var desc152 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref69 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        ref69.putClass( idlayer );
    desc152.putReference( idnull, ref69 );
    var idlayerID = stringIDToTypeID( "layerID" );
    desc152.putInteger( idlayerID, 11 );
executeAction( idmake, desc152, DialogModes.NO );

// ===== Left Shoulder Ellipse =============================
var idset = stringIDToTypeID( "set" );
    var desc13 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref7 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref7.putProperty( idchannel, idselection );
    desc13.putReference( idnull, ref7 );
    var idto = stringIDToTypeID( "to" );
        var desc14 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc14.putUnitDouble( idtop, idpixelsUnit, shoulderHeight );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc14.putUnitDouble( idleft, idpixelsUnit, shoulderLeft );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc14.putUnitDouble( idbottom, idpixelsUnit, shoulderBottom );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc14.putUnitDouble( idright, idpixelsUnit, shoulderRight );
    var idellipse = stringIDToTypeID( "ellipse" );
    desc13.putObject( idto, idellipse, desc14 );
executeAction( idset, desc13, DialogModes.NO );


// ===== Right Shoulder Ellipse ===========================
var idaddTo = stringIDToTypeID( "addTo" );
    var desc30 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref18 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref18.putProperty( idchannel, idselection );
    desc30.putReference( idnull, ref18 );
    var idto = stringIDToTypeID( "to" );
        var desc31 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc31.putUnitDouble( idtop, idpixelsUnit, shoulderHeight );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc31.putUnitDouble( idleft, idpixelsUnit, addShoulderLeft );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc31.putUnitDouble( idbottom, idpixelsUnit, shoulderBottom );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc31.putUnitDouble( idright, idpixelsUnit, addShoulderRight );
    var idellipse = stringIDToTypeID( "ellipse" );
    desc30.putObject( idto, idellipse, desc31 );
executeAction( idaddTo, desc30, DialogModes.NO );

// ===== Center Body Rectangle ==========================
var idaddTo = stringIDToTypeID( "addTo" );
    var desc34 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref21 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref21.putProperty( idchannel, idselection );
    desc34.putReference( idnull, ref21 );
    var idto = stringIDToTypeID( "to" );
        var desc35 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc35.putUnitDouble( idtop, idpixelsUnit, shoulderHeight );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc35.putUnitDouble( idleft, idpixelsUnit, ((shoulderRight + shoulderLeft)/2) );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc35.putUnitDouble( idbottom, idpixelsUnit, docHeight );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc35.putUnitDouble( idright, idpixelsUnit, ((addShoulderRight + addShoulderLeft)/2) );
    var idrectangle = stringIDToTypeID( "rectangle" );
    desc34.putObject( idto, idrectangle, desc35 );
executeAction( idaddTo, desc34, DialogModes.NO );

// ===== Fill Selection Random Bright Solid Color =========
var idfill = stringIDToTypeID( "fill" );
    var desc119 = new ActionDescriptor();
    var idusing = stringIDToTypeID( "using" );
    var idfillContents = stringIDToTypeID( "fillContents" );
    var idcolor = stringIDToTypeID( "color" );
    desc119.putEnumerated( idusing, idfillContents, idcolor );
    var idcolor = stringIDToTypeID( "color" );
        var desc120 = new ActionDescriptor();
        var idhue = stringIDToTypeID( "hue" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc120.putUnitDouble( idhue, idangleUnit, randomNumber(0, 360) );
        var idsaturation = stringIDToTypeID( "saturation" );
        desc120.putDouble( idsaturation, randomNumber(30, 100) );
        var idbrightness = stringIDToTypeID( "brightness" );
        desc120.putDouble( idbrightness, randomNumber(30, 100) );
    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
    desc119.putObject( idcolor, idHSBColorClass, desc120 );
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc119.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idmode = stringIDToTypeID( "mode" );
    var idblendMode = stringIDToTypeID( "blendMode" );
    var idnormal = stringIDToTypeID( "normal" );
    desc119.putEnumerated( idmode, idblendMode, idnormal );
executeAction( idfill, desc119, DialogModes.NO );


// Inner shadow or stroke here?

var startX = (docWidth/2) + randomNumber(-500,500) 
var startY = (docHeight/2) + randomNumber(-200,200)
var cutX = (docWidth/2) + randomNumber(-800,800)

// ===== Body Poly Lasso Remove ===================================
var idsubtractFrom = stringIDToTypeID( "subtractFrom" );
    var desc105 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref56 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref56.putProperty( idchannel, idselection );
    desc105.putReference( idnull, ref56 );
    var idto = stringIDToTypeID( "to" );
        var desc106 = new ActionDescriptor();
        var idpoints = stringIDToTypeID( "points" );
            var list4 = new ActionList();
                var desc107 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc107.putUnitDouble( idhorizontal, idpixelsUnit, startX );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc107.putUnitDouble( idvertical, idpixelsUnit, startY );
            var idpaint = stringIDToTypeID( "paint" );
            list4.putObject( idpaint, desc107 );
                var desc108 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc108.putUnitDouble( idhorizontal, idpixelsUnit, startX );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc108.putUnitDouble( idvertical, idpixelsUnit, startY );
            var idpaint = stringIDToTypeID( "paint" );
            list4.putObject( idpaint, desc108 );
                var desc109 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc109.putUnitDouble( idhorizontal, idpixelsUnit, cutX );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc109.putUnitDouble( idvertical, idpixelsUnit, docHeight );
            var idpaint = stringIDToTypeID( "paint" );
            list4.putObject( idpaint, desc109 );
                var desc110 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc110.putUnitDouble( idhorizontal, idpixelsUnit, docWidth );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc110.putUnitDouble( idvertical, idpixelsUnit, docHeight );
            var idpaint = stringIDToTypeID( "paint" );
            list4.putObject( idpaint, desc110 );
                var desc111 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc111.putUnitDouble( idhorizontal, idpixelsUnit, docWidth );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc111.putUnitDouble( idvertical, idpixelsUnit, 0 );
            var idpaint = stringIDToTypeID( "paint" );
            list4.putObject( idpaint, desc111 );
                var desc112 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc112.putUnitDouble( idhorizontal, idpixelsUnit, 1902.750000 );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc112.putUnitDouble( idvertical, idpixelsUnit, 756.156250 );
            var idpaint = stringIDToTypeID( "paint" );
            list4.putObject( idpaint, desc112 );
        desc106.putList( idpoints, list4 );
    var idpolygon = stringIDToTypeID( "polygon" );
    desc105.putObject( idto, idpolygon, desc106 );
    var idantiAlias = stringIDToTypeID( "antiAlias" );
    desc105.putBoolean( idantiAlias, true );
executeAction( idsubtractFrom, desc105, DialogModes.NO );

// ===== Fill Selection Random Bright Solid Color =========
var idfill = stringIDToTypeID( "fill" );
    var desc119 = new ActionDescriptor();
    var idusing = stringIDToTypeID( "using" );
    var idfillContents = stringIDToTypeID( "fillContents" );
    var idcolor = stringIDToTypeID( "color" );
    desc119.putEnumerated( idusing, idfillContents, idcolor );
    var idcolor = stringIDToTypeID( "color" );
        var desc120 = new ActionDescriptor();
        var idhue = stringIDToTypeID( "hue" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc120.putUnitDouble( idhue, idangleUnit, randomNumber(0, 360) );
        var idsaturation = stringIDToTypeID( "saturation" );
        desc120.putDouble( idsaturation, randomNumber(30, 100) );
        var idbrightness = stringIDToTypeID( "brightness" );
        desc120.putDouble( idbrightness, randomNumber(30, 100) );
    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
    desc119.putObject( idcolor, idHSBColorClass, desc120 );
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc119.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idmode = stringIDToTypeID( "mode" );
    var idblendMode = stringIDToTypeID( "blendMode" );
    var idnormal = stringIDToTypeID( "normal" );
    desc119.putEnumerated( idmode, idblendMode, idnormal );
executeAction( idfill, desc119, DialogModes.NO );


// ======= Neck Rectangle Add ==============
var idaddTo = stringIDToTypeID( "addTo" );
    var desc131 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref62 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref62.putProperty( idchannel, idselection );
    desc131.putReference( idnull, ref62 );
    var idto = stringIDToTypeID( "to" );
        var desc132 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc132.putUnitDouble( idtop, idpixelsUnit, 2047.000000 );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc132.putUnitDouble( idleft, idpixelsUnit, 766.000000 );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc132.putUnitDouble( idbottom, idpixelsUnit, 2387.000000 );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc132.putUnitDouble( idright, idpixelsUnit, 1819.000000 );
    var idrectangle = stringIDToTypeID( "rectangle" );
    desc131.putObject( idto, idrectangle, desc132 );
executeAction( idaddTo, desc131, DialogModes.NO );


// ====== Fill Selection Neck =========
var idfill = stringIDToTypeID( "fill" );
    var desc128 = new ActionDescriptor();
    var idusing = stringIDToTypeID( "using" );
    var idfillContents = stringIDToTypeID( "fillContents" );
    var idcolor = stringIDToTypeID( "color" );
    desc128.putEnumerated( idusing, idfillContents, idcolor );
    var idcolor = stringIDToTypeID( "color" );
        var desc129 = new ActionDescriptor();
        var idhue = stringIDToTypeID( "hue" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc129.putUnitDouble( idhue, idangleUnit, randomNumber(0,360) );
        var idsaturation = stringIDToTypeID( "saturation" );
        desc129.putDouble( idsaturation, randomNumber(30,100) );
        var idbrightness = stringIDToTypeID( "brightness" );
        desc129.putDouble( idbrightness, randomNumber(30,100) );
    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
    desc128.putObject( idcolor, idHSBColorClass, desc129 );
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc128.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idmode = stringIDToTypeID( "mode" );
    var idblendMode = stringIDToTypeID( "blendMode" );
    var idbehind = stringIDToTypeID( "behind" );
    desc128.putEnumerated( idmode, idblendMode, idbehind );
executeAction( idfill, desc128, DialogModes.NO );
} 
if (bodyRandom == 3){
// ===== body03.js =====================================

// ===== Complex Body Marquee ==========================

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var docHeight = 3300
var docWidth = 2550

var shoulderHeight = 2200
var shoulderLeft = 0
var shoulderBottom = (docHeight - shoulderHeight) + docHeight
var shoulderRight = 1000

var addShoulderLeft = docWidth - (shoulderRight - shoulderLeft)
var addShoulderRight = docWidth

// ===== Make New Layer ================================
var idmake = stringIDToTypeID( "make" );
    var desc152 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref69 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        ref69.putClass( idlayer );
    desc152.putReference( idnull, ref69 );
    var idlayerID = stringIDToTypeID( "layerID" );
    desc152.putInteger( idlayerID, 11 );
executeAction( idmake, desc152, DialogModes.NO );

// ===== Left Shoulder Ellipse =============================
var idset = stringIDToTypeID( "set" );
    var desc13 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref7 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref7.putProperty( idchannel, idselection );
    desc13.putReference( idnull, ref7 );
    var idto = stringIDToTypeID( "to" );
        var desc14 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc14.putUnitDouble( idtop, idpixelsUnit, shoulderHeight );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc14.putUnitDouble( idleft, idpixelsUnit, shoulderLeft );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc14.putUnitDouble( idbottom, idpixelsUnit, shoulderBottom );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc14.putUnitDouble( idright, idpixelsUnit, shoulderRight );
    var idellipse = stringIDToTypeID( "ellipse" );
    desc13.putObject( idto, idellipse, desc14 );
executeAction( idset, desc13, DialogModes.NO );


// ===== Right Shoulder Ellipse ===========================
var idaddTo = stringIDToTypeID( "addTo" );
    var desc30 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref18 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref18.putProperty( idchannel, idselection );
    desc30.putReference( idnull, ref18 );
    var idto = stringIDToTypeID( "to" );
        var desc31 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc31.putUnitDouble( idtop, idpixelsUnit, shoulderHeight );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc31.putUnitDouble( idleft, idpixelsUnit, addShoulderLeft );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc31.putUnitDouble( idbottom, idpixelsUnit, shoulderBottom );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc31.putUnitDouble( idright, idpixelsUnit, addShoulderRight );
    var idellipse = stringIDToTypeID( "ellipse" );
    desc30.putObject( idto, idellipse, desc31 );
executeAction( idaddTo, desc30, DialogModes.NO );

// ===== Center Body Rectangle ==========================
var idaddTo = stringIDToTypeID( "addTo" );
    var desc34 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref21 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref21.putProperty( idchannel, idselection );
    desc34.putReference( idnull, ref21 );
    var idto = stringIDToTypeID( "to" );
        var desc35 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc35.putUnitDouble( idtop, idpixelsUnit, shoulderHeight );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc35.putUnitDouble( idleft, idpixelsUnit, ((shoulderRight + shoulderLeft)/2) );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc35.putUnitDouble( idbottom, idpixelsUnit, docHeight );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc35.putUnitDouble( idright, idpixelsUnit, ((addShoulderRight + addShoulderLeft)/2) );
    var idrectangle = stringIDToTypeID( "rectangle" );
    desc34.putObject( idto, idrectangle, desc35 );
executeAction( idaddTo, desc34, DialogModes.NO );

// ===== Fill Selection Random Bright Solid Color =========
var idfill = stringIDToTypeID( "fill" );
    var desc119 = new ActionDescriptor();
    var idusing = stringIDToTypeID( "using" );
    var idfillContents = stringIDToTypeID( "fillContents" );
    var idcolor = stringIDToTypeID( "color" );
    desc119.putEnumerated( idusing, idfillContents, idcolor );
    var idcolor = stringIDToTypeID( "color" );
        var desc120 = new ActionDescriptor();
        var idhue = stringIDToTypeID( "hue" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc120.putUnitDouble( idhue, idangleUnit, randomNumber(0, 360) );
        var idsaturation = stringIDToTypeID( "saturation" );
        desc120.putDouble( idsaturation, randomNumber(30, 100) );
        var idbrightness = stringIDToTypeID( "brightness" );
        desc120.putDouble( idbrightness, randomNumber(30, 100) );
    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
    desc119.putObject( idcolor, idHSBColorClass, desc120 );
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc119.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idmode = stringIDToTypeID( "mode" );
    var idblendMode = stringIDToTypeID( "blendMode" );
    var idnormal = stringIDToTypeID( "normal" );
    desc119.putEnumerated( idmode, idblendMode, idnormal );
executeAction( idfill, desc119, DialogModes.NO );


// Inner shadow or stroke here?

var startX = (docWidth/2) + randomNumber(-500,500) 
var startY = (docHeight/2) + randomNumber(-200,200)
var cutX = (docWidth/2) + randomNumber(-800,800)

// ===== Body Poly Lasso Remove ===================================
var idsubtractFrom = stringIDToTypeID( "subtractFrom" );
    var desc105 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref56 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref56.putProperty( idchannel, idselection );
    desc105.putReference( idnull, ref56 );
    var idto = stringIDToTypeID( "to" );
        var desc106 = new ActionDescriptor();
        var idpoints = stringIDToTypeID( "points" );
            var list4 = new ActionList();
                var desc107 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc107.putUnitDouble( idhorizontal, idpixelsUnit, startX );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc107.putUnitDouble( idvertical, idpixelsUnit, startY );
            var idpaint = stringIDToTypeID( "paint" );
            list4.putObject( idpaint, desc107 );
                var desc108 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc108.putUnitDouble( idhorizontal, idpixelsUnit, startX );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc108.putUnitDouble( idvertical, idpixelsUnit, startY );
            var idpaint = stringIDToTypeID( "paint" );
            list4.putObject( idpaint, desc108 );
                var desc109 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc109.putUnitDouble( idhorizontal, idpixelsUnit, cutX );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc109.putUnitDouble( idvertical, idpixelsUnit, docHeight );
            var idpaint = stringIDToTypeID( "paint" );
            list4.putObject( idpaint, desc109 );
                var desc110 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc110.putUnitDouble( idhorizontal, idpixelsUnit, docWidth );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc110.putUnitDouble( idvertical, idpixelsUnit, docHeight );
            var idpaint = stringIDToTypeID( "paint" );
            list4.putObject( idpaint, desc110 );
                var desc111 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc111.putUnitDouble( idhorizontal, idpixelsUnit, docWidth );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc111.putUnitDouble( idvertical, idpixelsUnit, 0 );
            var idpaint = stringIDToTypeID( "paint" );
            list4.putObject( idpaint, desc111 );
                var desc112 = new ActionDescriptor();
                var idhorizontal = stringIDToTypeID( "horizontal" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc112.putUnitDouble( idhorizontal, idpixelsUnit, 1902.750000 );
                var idvertical = stringIDToTypeID( "vertical" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc112.putUnitDouble( idvertical, idpixelsUnit, 756.156250 );
            var idpaint = stringIDToTypeID( "paint" );
            list4.putObject( idpaint, desc112 );
        desc106.putList( idpoints, list4 );
    var idpolygon = stringIDToTypeID( "polygon" );
    desc105.putObject( idto, idpolygon, desc106 );
    var idantiAlias = stringIDToTypeID( "antiAlias" );
    desc105.putBoolean( idantiAlias, true );
executeAction( idsubtractFrom, desc105, DialogModes.NO );

// ===== Fill Selection Random Bright Solid Color =========
var idfill = stringIDToTypeID( "fill" );
    var desc119 = new ActionDescriptor();
    var idusing = stringIDToTypeID( "using" );
    var idfillContents = stringIDToTypeID( "fillContents" );
    var idcolor = stringIDToTypeID( "color" );
    desc119.putEnumerated( idusing, idfillContents, idcolor );
    var idcolor = stringIDToTypeID( "color" );
        var desc120 = new ActionDescriptor();
        var idhue = stringIDToTypeID( "hue" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc120.putUnitDouble( idhue, idangleUnit, randomNumber(0, 360) );
        var idsaturation = stringIDToTypeID( "saturation" );
        desc120.putDouble( idsaturation, randomNumber(30, 100) );
        var idbrightness = stringIDToTypeID( "brightness" );
        desc120.putDouble( idbrightness, randomNumber(30, 100) );
    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
    desc119.putObject( idcolor, idHSBColorClass, desc120 );
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc119.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idmode = stringIDToTypeID( "mode" );
    var idblendMode = stringIDToTypeID( "blendMode" );
    var idnormal = stringIDToTypeID( "normal" );
    desc119.putEnumerated( idmode, idblendMode, idnormal );
executeAction( idfill, desc119, DialogModes.NO );

// ======= Neck Rectangle Add ==============
var idaddTo = stringIDToTypeID( "addTo" );
    var desc131 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref62 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref62.putProperty( idchannel, idselection );
    desc131.putReference( idnull, ref62 );
    var idto = stringIDToTypeID( "to" );
        var desc132 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc132.putUnitDouble( idtop, idpixelsUnit, 2047.000000 );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc132.putUnitDouble( idleft, idpixelsUnit, 766.000000 );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc132.putUnitDouble( idbottom, idpixelsUnit, 2387.000000 );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc132.putUnitDouble( idright, idpixelsUnit, 1819.000000 );
    var idrectangle = stringIDToTypeID( "rectangle" );
    desc131.putObject( idto, idrectangle, desc132 );
executeAction( idaddTo, desc131, DialogModes.NO );


// ====== Fill Selection Neck =========
var idfill = stringIDToTypeID( "fill" );
    var desc128 = new ActionDescriptor();
    var idusing = stringIDToTypeID( "using" );
    var idfillContents = stringIDToTypeID( "fillContents" );
    var idcolor = stringIDToTypeID( "color" );
    desc128.putEnumerated( idusing, idfillContents, idcolor );
    var idcolor = stringIDToTypeID( "color" );
        var desc129 = new ActionDescriptor();
        var idhue = stringIDToTypeID( "hue" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc129.putUnitDouble( idhue, idangleUnit, randomNumber(0,360) );
        var idsaturation = stringIDToTypeID( "saturation" );
        desc129.putDouble( idsaturation, randomNumber(30,100) );
        var idbrightness = stringIDToTypeID( "brightness" );
        desc129.putDouble( idbrightness, randomNumber(30,100) );
    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
    desc128.putObject( idcolor, idHSBColorClass, desc129 );
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc128.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idmode = stringIDToTypeID( "mode" );
    var idblendMode = stringIDToTypeID( "blendMode" );
    var idbehind = stringIDToTypeID( "behind" );
    desc128.putEnumerated( idmode, idblendMode, idbehind );
executeAction( idfill, desc128, DialogModes.NO );
}

// ===== Make a New Layer ==========================
var idmake = stringIDToTypeID( "make" );
var desc799 = new ActionDescriptor();
var idnull = stringIDToTypeID( "null" );
var ref227 = new ActionReference();
var idlayer = stringIDToTypeID( "layer" );
ref227.putClass( idlayer );
desc799.putReference( idnull, ref227 );
var idlayerID = stringIDToTypeID( "layerID" );
desc799.putInteger( idlayerID, 2 );
executeAction( idmake, desc799, DialogModes.NO );

// ===== Ellipse Selection =================================
var idset = stringIDToTypeID( "set" );
var desc19 = new ActionDescriptor();
var idnull = stringIDToTypeID( "null" );
var ref15 = new ActionReference();
var idchannel = stringIDToTypeID( "channel" );
var idselection = stringIDToTypeID( "selection" );
ref15.putProperty( idchannel, idselection );
desc19.putReference( idnull, ref15 );
var idto = stringIDToTypeID( "to" );
var desc20 = new ActionDescriptor();
var idtop = stringIDToTypeID( "top" );
var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
desc20.putUnitDouble( idtop, idpixelsUnit, 10.000000 );
var idleft = stringIDToTypeID( "left" );
var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
desc20.putUnitDouble( idleft, idpixelsUnit, 10.000000 );
var idbottom = stringIDToTypeID( "bottom" );
var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
desc20.putUnitDouble( idbottom, idpixelsUnit, 2540.000000 );
var idright = stringIDToTypeID( "right" );
var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
desc20.putUnitDouble( idright, idpixelsUnit, 2540.000000 );
var idellipse = stringIDToTypeID( "ellipse" );
desc19.putObject( idto, idellipse, desc20 );
executeAction( idset, desc19, DialogModes.NO );

var fillChoice = randomNumber(1,3);
// where 1 is three color vertical, 2 is single color, 3 is random radial

// ===== Vertical Three Color Gradient ======================
if (fillChoice == 1){
    var randomY1 = (randomNumber(100, 900));
    var randomY2 = (randomNumber((randomY1 + 100), 2000));

    var randomR1 = (randomNumber(0, 255));
    var randomG1 = (randomNumber(0, 255));
    var randomB1 = (randomNumber(0, 255));

    var randomR2 = (randomNumber(0, 255));
    var randomG2 = (randomNumber(0, 255));
    var randomB2 = (randomNumber(0, 255));

    var randomR3 = (randomNumber(0, 255));
    var randomG3 = (randomNumber(0, 255));
    var randomB3 = (randomNumber(0, 255));
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    var desc38 = new ActionDescriptor();
    var idfrom = stringIDToTypeID( "from" );
    var desc39 = new ActionDescriptor();
    var idhorizontal = stringIDToTypeID( "horizontal" );
    var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
    desc39.putUnitDouble( idhorizontal, idpixelsUnit, 1225.000000 );
    var idvertical = stringIDToTypeID( "vertical" );
    var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
    desc39.putUnitDouble( idvertical, idpixelsUnit, randomY1 );
    var idpaint = stringIDToTypeID( "paint" );
    desc38.putObject( idfrom, idpaint, desc39 );
    var idto = stringIDToTypeID( "to" );
    var desc40 = new ActionDescriptor();
    var idhorizontal = stringIDToTypeID( "horizontal" );
    var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
    desc40.putUnitDouble( idhorizontal, idpixelsUnit, 1225.000000 );
    var idvertical = stringIDToTypeID( "vertical" );
    var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
    desc40.putUnitDouble( idvertical, idpixelsUnit, randomY2 );
    var idpaint = stringIDToTypeID( "paint" );
    desc38.putObject( idto, idpaint, desc40 );
    var idtype = stringIDToTypeID( "type" );
    var idgradientType = stringIDToTypeID( "gradientType" );
    var idlinear = stringIDToTypeID( "linear" );
    desc38.putEnumerated( idtype, idgradientType, idlinear );
    var iduseMask = stringIDToTypeID( "useMask" );
    desc38.putBoolean( iduseMask, true );
    var idgradient = stringIDToTypeID( "gradient" );
    var desc41 = new ActionDescriptor();
    var idname = stringIDToTypeID( "name" );
    desc41.putString( idname, """Blue_17""" );
    var idgradientForm = stringIDToTypeID( "gradientForm" );
    var idgradientForm = stringIDToTypeID( "gradientForm" );
    var idcustomStops = stringIDToTypeID( "customStops" );
    desc41.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
    var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
    desc41.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
    var idcolors = stringIDToTypeID( "colors" );
    var list8 = new ActionList();
    var desc42 = new ActionDescriptor();
    var idcolor = stringIDToTypeID( "color" );
    var desc43 = new ActionDescriptor();
    var idred = stringIDToTypeID( "red" );
    desc43.putDouble( idred, randomR1 );
    var idgrain = stringIDToTypeID( "grain" );
    desc43.putDouble( idgrain, randomG1 );
    var idblue = stringIDToTypeID( "blue" );
    desc43.putDouble( idblue, randomB1 );
    var idRGBColor = stringIDToTypeID( "RGBColor" );
    desc42.putObject( idcolor, idRGBColor, desc43 );
    var idtype = stringIDToTypeID( "type" );
    var idcolorStopType = stringIDToTypeID( "colorStopType" );
    var iduserStop = stringIDToTypeID( "userStop" );
    desc42.putEnumerated( idtype, idcolorStopType, iduserStop );
    var idlocation = stringIDToTypeID( "location" );
    desc42.putInteger( idlocation, 0 );
    var idmidpoint = stringIDToTypeID( "midpoint" );
    desc42.putInteger( idmidpoint, 50 );
    var idcolorStop = stringIDToTypeID( "colorStop" );
    list8.putObject( idcolorStop, desc42 );
    var desc44 = new ActionDescriptor();
    var idcolor = stringIDToTypeID( "color" );
    var desc45 = new ActionDescriptor();
    var idred = stringIDToTypeID( "red" );
    desc45.putDouble( idred, randomR2 );
    var idgrain = stringIDToTypeID( "grain" );
    desc45.putDouble( idgrain, randomG2 );
    var idblue = stringIDToTypeID( "blue" );
    desc45.putDouble( idblue, randomB2 );
    var idRGBColor = stringIDToTypeID( "RGBColor" );
    desc44.putObject( idcolor, idRGBColor, desc45 );
    var idtype = stringIDToTypeID( "type" );
    var idcolorStopType = stringIDToTypeID( "colorStopType" );
    var iduserStop = stringIDToTypeID( "userStop" );
    desc44.putEnumerated( idtype, idcolorStopType, iduserStop );
    var idlocation = stringIDToTypeID( "location" );
    desc44.putInteger( idlocation, 2048 );
    var idmidpoint = stringIDToTypeID( "midpoint" );
    desc44.putInteger( idmidpoint, 50 );
    var idcolorStop = stringIDToTypeID( "colorStop" );
    list8.putObject( idcolorStop, desc44 );
    var desc46 = new ActionDescriptor();
    var idcolor = stringIDToTypeID( "color" );
    var desc47 = new ActionDescriptor();
    var idred = stringIDToTypeID( "red" );
    desc47.putDouble( idred, randomR3 );
    var idgrain = stringIDToTypeID( "grain" );
    desc47.putDouble( idgrain, randomG3 );
    var idblue = stringIDToTypeID( "blue" );
    desc47.putDouble( idblue, randomB3 );
    var idRGBColor = stringIDToTypeID( "RGBColor" );
    desc46.putObject( idcolor, idRGBColor, desc47 );
    var idtype = stringIDToTypeID( "type" );
    var idcolorStopType = stringIDToTypeID( "colorStopType" );
    var iduserStop = stringIDToTypeID( "userStop" );
    desc46.putEnumerated( idtype, idcolorStopType, iduserStop );
    var idlocation = stringIDToTypeID( "location" );
    desc46.putInteger( idlocation, 4096 );
    var idmidpoint = stringIDToTypeID( "midpoint" );
    desc46.putInteger( idmidpoint, 50 );
    var idcolorStop = stringIDToTypeID( "colorStop" );
    list8.putObject( idcolorStop, desc46 );
    desc41.putList( idcolors, list8 );
    var idtransparency = stringIDToTypeID( "transparency" );
    var list9 = new ActionList();
    var desc48 = new ActionDescriptor();
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc48.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idlocation = stringIDToTypeID( "location" );
    desc48.putInteger( idlocation, 0 );
    var idmidpoint = stringIDToTypeID( "midpoint" );
    desc48.putInteger( idmidpoint, 50 );
    var idtransferSpec = stringIDToTypeID( "transferSpec" );
    list9.putObject( idtransferSpec, desc48 );
    var desc49 = new ActionDescriptor();
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc49.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idlocation = stringIDToTypeID( "location" );
    desc49.putInteger( idlocation, 4096 );
    var idmidpoint = stringIDToTypeID( "midpoint" );
    desc49.putInteger( idmidpoint, 50 );
    var idtransferSpec = stringIDToTypeID( "transferSpec" );
    list9.putObject( idtransferSpec, desc49 );
    desc41.putList( idtransparency, list9 );
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    desc38.putObject( idgradient, idgradientClassEvent, desc41 );
    executeAction( idgradientClassEvent, desc38, DialogModes.NO );
}

// ===== Random Foreground Color Fill =======================
if(fillChoice == 2){
    var randomAng = (randomNumber(0, 360));
    var randomSat = (randomNumber(30, 100));
    var randomBri = (randomNumber(30, 100));

    // ====FOREGROUND COLOR PICKER===========
    var idset = stringIDToTypeID( "set" );
    var desc179 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref44 = new ActionReference();
        var idcolor = stringIDToTypeID( "color" );
        var idforegroundColor = stringIDToTypeID( "foregroundColor" );
        ref44.putProperty( idcolor, idforegroundColor );
    desc179.putReference( idnull, ref44 );
    var idto = stringIDToTypeID( "to" );
        var desc180 = new ActionDescriptor();
        var idhue = stringIDToTypeID( "hue" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc180.putUnitDouble( idhue, idangleUnit, randomAng );
        var idsaturation = stringIDToTypeID( "saturation" );
        desc180.putDouble( idsaturation, randomSat );
        var idbrightness = stringIDToTypeID( "brightness" );
        desc180.putDouble( idbrightness, randomBri );
    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
    desc179.putObject( idto, idHSBColorClass, desc180 );
    var idsource = stringIDToTypeID( "source" );
    desc179.putString( idsource, """photoshopPicker""" );
executeAction( idset, desc179, DialogModes.NO );

    // ==== Fill Selection with Foreground Color ===========
    var idfill = stringIDToTypeID( "fill" );
    var desc6 = new ActionDescriptor();
    var idusing = stringIDToTypeID( "using" );
    var idfillContents = stringIDToTypeID( "fillContents" );
    var idforegroundColor = stringIDToTypeID( "foregroundColor" );
    desc6.putEnumerated( idusing, idfillContents, idforegroundColor );
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc6.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idmode = stringIDToTypeID( "mode" );
    var idblendMode = stringIDToTypeID( "blendMode" );
    var idnormal = stringIDToTypeID( "normal" );
    desc6.putEnumerated( idmode, idblendMode, idnormal );
    executeAction( idfill, desc6, DialogModes.NO );
}

// ===== Radial Gradient Random  ===========================
if(fillChoice == 3){
    var randomX1  = (randomNumber(0, 2550));
    var randomX2  = (randomNumber(0, 2550));
    var randomY1  = (randomNumber(0, 2550));
    var randomY2  = (randomNumber(0, 2550));

    var randomR1 = (randomNumber(0, 255));
    var randomG1 = (randomNumber(0, 255));
    var randomB1 = (randomNumber(0, 255));

    var randomR2 = (randomNumber(0, 255));
    var randomG2 = (randomNumber(0, 255));
    var randomB2 = (randomNumber(0, 255));
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    var desc690 = new ActionDescriptor();
    var idfrom = stringIDToTypeID( "from" );
        var desc691 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idhorizontal, idpixelsUnit, randomX1 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idvertical, idpixelsUnit, randomY1 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idfrom, idpaint, desc691 );
    var idto = stringIDToTypeID( "to" );
        var desc692 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idhorizontal, idpixelsUnit, randomX2 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idvertical, idpixelsUnit, randomY2 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idto, idpaint, desc692 );
    var idtype = stringIDToTypeID( "type" );
    var idgradientType = stringIDToTypeID( "gradientType" );
    var idradial = stringIDToTypeID( "radial" );
    desc690.putEnumerated( idtype, idgradientType, idradial );
    var iduseMask = stringIDToTypeID( "useMask" );
    desc690.putBoolean( iduseMask, true );
    var idgradient = stringIDToTypeID( "gradient" );
        var desc693 = new ActionDescriptor();
        var idname = stringIDToTypeID( "name" );
        desc693.putString( idname, """Violet, Orange""" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idcustomStops = stringIDToTypeID( "customStops" );
        desc693.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
        var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
        desc693.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
        var idcolors = stringIDToTypeID( "colors" );
            var list108 = new ActionList();
                var desc694 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc695 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc695.putDouble( idred, randomR1 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc695.putDouble( idgrain, randomG1 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc695.putDouble( idblue, randomB1 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc694.putObject( idcolor, idRGBColor, desc695 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc694.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc694.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc694.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc694 );
                var desc696 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc697 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc697.putDouble( idred, randomR2 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc697.putDouble( idgrain, randomG2 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc697.putDouble( idblue, randomB2 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc696.putObject( idcolor, idRGBColor, desc697 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc696.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc696.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc696.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc696 );
        desc693.putList( idcolors, list108 );
        var idtransparency = stringIDToTypeID( "transparency" );
            var list109 = new ActionList();
                var desc698 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc698.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc698.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc698.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc698 );
                var desc699 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc699.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc699.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc699.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc699 );
        desc693.putList( idtransparency, list109 );
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    desc690.putObject( idgradient, idgradientClassEvent, desc693 );
executeAction( idgradientClassEvent, desc690, DialogModes.NO );
}

// ===== Ellipse Subtract =================================
var randomStart = (randomNumber(50, 200));
var randomEnd = (2550 - randomStart);

var idsubtractFrom = stringIDToTypeID( "subtractFrom" );
    var desc98 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref21 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref21.putProperty( idchannel, idselection );
    desc98.putReference( idnull, ref21 );
    var idto = stringIDToTypeID( "to" );
        var desc99 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc99.putUnitDouble( idtop, idpixelsUnit, randomStart );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc99.putUnitDouble( idleft, idpixelsUnit, randomStart );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc99.putUnitDouble( idbottom, idpixelsUnit, randomEnd );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc99.putUnitDouble( idright, idpixelsUnit, randomEnd );
    var idellipse = stringIDToTypeID( "ellipse" );
    desc98.putObject( idto, idellipse, desc99 );
executeAction( idsubtractFrom, desc98, DialogModes.NO );



// ===== Gradient Two Color =================================
    var randomY1 = (randomNumber(100, 900));
    var randomY2 = (randomNumber(randomY1, 1600));

    var randomAng1 = (randomNumber(0, 360));
    var randomSat1 = (randomNumber(30, 100));
    var randomBri1 = (randomNumber(30, 100));

    var randomAng2 = (randomNumber(0, 360));
    var randomSat2 = (randomNumber(30, 100));
    var randomBri2 = (randomNumber(30, 100));

    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
        var desc50 = new ActionDescriptor();
        var idfrom = stringIDToTypeID( "from" );
            var desc51 = new ActionDescriptor();
            var idhorizontal = stringIDToTypeID( "horizontal" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc51.putUnitDouble( idhorizontal, idpixelsUnit, 1225.000000 );
            var idvertical = stringIDToTypeID( "vertical" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc51.putUnitDouble( idvertical, idpixelsUnit, randomY1 );
        var idpaint = stringIDToTypeID( "paint" );
        desc50.putObject( idfrom, idpaint, desc51 );
        var idto = stringIDToTypeID( "to" );
            var desc52 = new ActionDescriptor();
            var idhorizontal = stringIDToTypeID( "horizontal" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc52.putUnitDouble( idhorizontal, idpixelsUnit, 1225.000000 );
            var idvertical = stringIDToTypeID( "vertical" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc52.putUnitDouble( idvertical, idpixelsUnit, randomY2 );
        var idpaint = stringIDToTypeID( "paint" );
        desc50.putObject( idto, idpaint, desc52 );
        var idtype = stringIDToTypeID( "type" );
        var idgradientType = stringIDToTypeID( "gradientType" );
        var idlinear = stringIDToTypeID( "linear" );
        desc50.putEnumerated( idtype, idgradientType, idlinear );
        var iduseMask = stringIDToTypeID( "useMask" );
        desc50.putBoolean( iduseMask, true );
        var idgradient = stringIDToTypeID( "gradient" );
            var desc53 = new ActionDescriptor();
            var idname = stringIDToTypeID( "name" );
            desc53.putString( idname, """Custom""" );
            var idgradientForm = stringIDToTypeID( "gradientForm" );
            var idgradientForm = stringIDToTypeID( "gradientForm" );
            var idcustomStops = stringIDToTypeID( "customStops" );
            desc53.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
            var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
            desc53.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
            var idcolors = stringIDToTypeID( "colors" );
                var list10 = new ActionList();
                    var desc54 = new ActionDescriptor();
                    var idcolor = stringIDToTypeID( "color" );
                        var desc55 = new ActionDescriptor();
                        var idhue = stringIDToTypeID( "hue" );
                        var idangleUnit = stringIDToTypeID( "angleUnit" );
                        desc55.putUnitDouble( idhue, idangleUnit, randomAng1 );
                        var idsaturation = stringIDToTypeID( "saturation" );
                        desc55.putDouble( idsaturation, randomSat1 );
                        var idbrightness = stringIDToTypeID( "brightness" );
                        desc55.putDouble( idbrightness, randomBri1 );
                    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
                    desc54.putObject( idcolor, idHSBColorClass, desc55 );
                    var idtype = stringIDToTypeID( "type" );
                    var idcolorStopType = stringIDToTypeID( "colorStopType" );
                    var iduserStop = stringIDToTypeID( "userStop" );
                    desc54.putEnumerated( idtype, idcolorStopType, iduserStop );
                    var idlocation = stringIDToTypeID( "location" );
                    desc54.putInteger( idlocation, 0 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc54.putInteger( idmidpoint, 50 );
                var idcolorStop = stringIDToTypeID( "colorStop" );
                list10.putObject( idcolorStop, desc54 );
                    var desc56 = new ActionDescriptor();
                    var idcolor = stringIDToTypeID( "color" );
                        var desc57 = new ActionDescriptor();
                        var idhue = stringIDToTypeID( "hue" );
                        var idangleUnit = stringIDToTypeID( "angleUnit" );
                        desc57.putUnitDouble( idhue, idangleUnit, randomAng2 );
                        var idsaturation = stringIDToTypeID( "saturation" );
                        desc57.putDouble( idsaturation, randomSat2 );
                        var idbrightness = stringIDToTypeID( "brightness" );
                        desc57.putDouble( idbrightness, randomBri2 );
                    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
                    desc56.putObject( idcolor, idHSBColorClass, desc57 );
                    var idtype = stringIDToTypeID( "type" );
                    var idcolorStopType = stringIDToTypeID( "colorStopType" );
                    var iduserStop = stringIDToTypeID( "userStop" );
                    desc56.putEnumerated( idtype, idcolorStopType, iduserStop );
                    var idlocation = stringIDToTypeID( "location" );
                    desc56.putInteger( idlocation, 4096 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc56.putInteger( idmidpoint, 50 );
                var idcolorStop = stringIDToTypeID( "colorStop" );
                list10.putObject( idcolorStop, desc56 );
            desc53.putList( idcolors, list10 );
            var idtransparency = stringIDToTypeID( "transparency" );
                var list11 = new ActionList();
                    var desc58 = new ActionDescriptor();
                    var idopacity = stringIDToTypeID( "opacity" );
                    var idpercentUnit = stringIDToTypeID( "percentUnit" );
                    desc58.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                    var idlocation = stringIDToTypeID( "location" );
                    desc58.putInteger( idlocation, 0 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc58.putInteger( idmidpoint, 50 );
                var idtransferSpec = stringIDToTypeID( "transferSpec" );
                list11.putObject( idtransferSpec, desc58 );
                    var desc59 = new ActionDescriptor();
                    var idopacity = stringIDToTypeID( "opacity" );
                    var idpercentUnit = stringIDToTypeID( "percentUnit" );
                    desc59.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                    var idlocation = stringIDToTypeID( "location" );
                    desc59.putInteger( idlocation, 4096 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc59.putInteger( idmidpoint, 50 );
                var idtransferSpec = stringIDToTypeID( "transferSpec" );
                list11.putObject( idtransferSpec, desc59 );
            desc53.putList( idtransparency, list11 );
        var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
        desc50.putObject( idgradient, idgradientClassEvent, desc53 );
    executeAction( idgradientClassEvent, desc50, DialogModes.NO );

// ===== Make new layer from seleciton ======================
var idcopyToLayer = stringIDToTypeID( "copyToLayer" );
executeAction( idcopyToLayer, undefined, DialogModes.NO );

// ===== Bevel and Emboss =======================
var idset = stringIDToTypeID( "set" );
    var desc128 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref36 = new ActionReference();
        var idproperty = stringIDToTypeID( "property" );
        var idlayerEffects = stringIDToTypeID( "layerEffects" );
        ref36.putProperty( idproperty, idlayerEffects );
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref36.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc128.putReference( idnull, ref36 );
    var idto = stringIDToTypeID( "to" );
        var desc129 = new ActionDescriptor();
        var idscale = stringIDToTypeID( "scale" );
        var idpercentUnit = stringIDToTypeID( "percentUnit" );
        desc129.putUnitDouble( idscale, idpercentUnit, 416.666667 );
        var idbevelEmboss = stringIDToTypeID( "bevelEmboss" );
            var desc130 = new ActionDescriptor();
            var idenabled = stringIDToTypeID( "enabled" );
            desc130.putBoolean( idenabled, true );
            var idpresent = stringIDToTypeID( "present" );
            desc130.putBoolean( idpresent, true );
            var idshowInDialog = stringIDToTypeID( "showInDialog" );
            desc130.putBoolean( idshowInDialog, true );
            var idhighlightMode = stringIDToTypeID( "highlightMode" );
            var idblendMode = stringIDToTypeID( "blendMode" );
            var idnormal = stringIDToTypeID( "normal" );
            desc130.putEnumerated( idhighlightMode, idblendMode, idnormal );
            var idhighlightColor = stringIDToTypeID( "highlightColor" );
                var desc131 = new ActionDescriptor();
                var idred = stringIDToTypeID( "red" );
                desc131.putDouble( idred, 255.000000 );
                var idgrain = stringIDToTypeID( "grain" );
                desc131.putDouble( idgrain, 255.000000 );
                var idblue = stringIDToTypeID( "blue" );
                desc131.putDouble( idblue, 255.000000 );
            var idRGBColor = stringIDToTypeID( "RGBColor" );
            desc130.putObject( idhighlightColor, idRGBColor, desc131 );
            var idhighlightOpacity = stringIDToTypeID( "highlightOpacity" );
            var idpercentUnit = stringIDToTypeID( "percentUnit" );
            desc130.putUnitDouble( idhighlightOpacity, idpercentUnit, 100.000000 );
            var idshadowMode = stringIDToTypeID( "shadowMode" );
            var idblendMode = stringIDToTypeID( "blendMode" );
            var idnormal = stringIDToTypeID( "normal" );
            desc130.putEnumerated( idshadowMode, idblendMode, idnormal );
            var idshadowColor = stringIDToTypeID( "shadowColor" );
                var desc132 = new ActionDescriptor();
                var idred = stringIDToTypeID( "red" );
                desc132.putDouble( idred, 255.000000 );
                var idgrain = stringIDToTypeID( "grain" );
                desc132.putDouble( idgrain, 255.000000 );
                var idblue = stringIDToTypeID( "blue" );
                desc132.putDouble( idblue, 255.000000 );
            var idRGBColor = stringIDToTypeID( "RGBColor" );
            desc130.putObject( idshadowColor, idRGBColor, desc132 );
            var idshadowOpacity = stringIDToTypeID( "shadowOpacity" );
            var idpercentUnit = stringIDToTypeID( "percentUnit" );
            desc130.putUnitDouble( idshadowOpacity, idpercentUnit, 100.000000 );
            var idbevelTechnique = stringIDToTypeID( "bevelTechnique" );
            var idbevelTechnique = stringIDToTypeID( "bevelTechnique" );
            var idsoftMatte = stringIDToTypeID( "softMatte" );
            desc130.putEnumerated( idbevelTechnique, idbevelTechnique, idsoftMatte );
            var idbevelStyle = stringIDToTypeID( "bevelStyle" );
            var idbevelEmbossStyle = stringIDToTypeID( "bevelEmbossStyle" );
            var idinnerBevel = stringIDToTypeID( "innerBevel" );
            desc130.putEnumerated( idbevelStyle, idbevelEmbossStyle, idinnerBevel );
            var iduseGlobalAngle = stringIDToTypeID( "useGlobalAngle" );
            desc130.putBoolean( iduseGlobalAngle, true );
            var idlocalLightingAngle = stringIDToTypeID( "localLightingAngle" );
            var idangleUnit = stringIDToTypeID( "angleUnit" );
            desc130.putUnitDouble( idlocalLightingAngle, idangleUnit, 90.000000 );
            var idlocalLightingAltitude = stringIDToTypeID( "localLightingAltitude" );
            var idangleUnit = stringIDToTypeID( "angleUnit" );
            desc130.putUnitDouble( idlocalLightingAltitude, idangleUnit, 30.000000 );
            var idstrengthRatio = stringIDToTypeID( "strengthRatio" );
            var idpercentUnit = stringIDToTypeID( "percentUnit" );
            desc130.putUnitDouble( idstrengthRatio, idpercentUnit, 615.000000 );
            var idblur = stringIDToTypeID( "blur" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc130.putUnitDouble( idblur, idpixelsUnit, 21.000000 );
            var idbevelDirection = stringIDToTypeID( "bevelDirection" );
            var idbevelEmbossStampStyle = stringIDToTypeID( "bevelEmbossStampStyle" );
            var idin = stringIDToTypeID( "in" );
            desc130.putEnumerated( idbevelDirection, idbevelEmbossStampStyle, idin );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
                var desc133 = new ActionDescriptor();
                var idname = stringIDToTypeID( "name" );
                desc133.putString( idname, """Linear""" );
            var idshapeCurveType = stringIDToTypeID( "shapeCurveType" );
            desc130.putObject( idtransferSpec, idshapeCurveType, desc133 );
            var idantialiasGloss = stringIDToTypeID( "antialiasGloss" );
            desc130.putBoolean( idantialiasGloss, false );
            var idsoftness = stringIDToTypeID( "softness" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc130.putUnitDouble( idsoftness, idpixelsUnit, 8.000000 );
            var iduseShape = stringIDToTypeID( "useShape" );
            desc130.putBoolean( iduseShape, false );
            var iduseTexture = stringIDToTypeID( "useTexture" );
            desc130.putBoolean( iduseTexture, false );
        var idbevelEmboss = stringIDToTypeID( "bevelEmboss" );
        desc129.putObject( idbevelEmboss, idbevelEmboss, desc130 );
    var idlayerEffects = stringIDToTypeID( "layerEffects" );
    desc128.putObject( idto, idlayerEffects, desc129 );
executeAction( idset, desc128, DialogModes.NO );

// ===== Merge Layers ================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc134 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc134, DialogModes.NO );

// ===== Inner Glow (1/4 chance) ======================================
var innerGlowR = randomNumber(1,4);
if (innerGlowR == 1){
    var glowSize = randomNumber(150, 250);
    var glowChoke = randomNumber (0, 75);
    var idset = stringIDToTypeID( "set" );
        var desc64 = new ActionDescriptor();
        var idnull = stringIDToTypeID( "null" );
            var ref40 = new ActionReference();
            var idproperty = stringIDToTypeID( "property" );
            var idlayerEffects = stringIDToTypeID( "layerEffects" );
            ref40.putProperty( idproperty, idlayerEffects );
            var idlayer = stringIDToTypeID( "layer" );
            var idordinal = stringIDToTypeID( "ordinal" );
            var idtargetEnum = stringIDToTypeID( "targetEnum" );
            ref40.putEnumerated( idlayer, idordinal, idtargetEnum );
        desc64.putReference( idnull, ref40 );
        var idto = stringIDToTypeID( "to" );
            var desc65 = new ActionDescriptor();
            var idscale = stringIDToTypeID( "scale" );
            var idpercentUnit = stringIDToTypeID( "percentUnit" );
            desc65.putUnitDouble( idscale, idpercentUnit, 416.666667 );
            var idinnerGlow = stringIDToTypeID( "innerGlow" );
                var desc66 = new ActionDescriptor();
                var idenabled = stringIDToTypeID( "enabled" );
                desc66.putBoolean( idenabled, true );
                var idpresent = stringIDToTypeID( "present" );
                desc66.putBoolean( idpresent, true );
                var idshowInDialog = stringIDToTypeID( "showInDialog" );
                desc66.putBoolean( idshowInDialog, true );
                var idmode = stringIDToTypeID( "mode" );
                var idblendMode = stringIDToTypeID( "blendMode" );
                var idnormal = stringIDToTypeID( "normal" );
                desc66.putEnumerated( idmode, idblendMode, idnormal );
                var idcolor = stringIDToTypeID( "color" );
                    var desc67 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc67.putDouble( idred, 255.000000 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc67.putDouble( idgrain, 255.000000 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc67.putDouble( idblue, 255.000000 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc66.putObject( idcolor, idRGBColor, desc67 );
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc66.putUnitDouble( idopacity, idpercentUnit, 59.000000 );
                var idglowTechnique = stringIDToTypeID( "glowTechnique" );
                var idmatteTechnique = stringIDToTypeID( "matteTechnique" );
                var idsoftMatte = stringIDToTypeID( "softMatte" );
                desc66.putEnumerated( idglowTechnique, idmatteTechnique, idsoftMatte );
                var idchokeMatte = stringIDToTypeID( "chokeMatte" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc66.putUnitDouble( idchokeMatte, idpixelsUnit, glowChoke );
                var idblur = stringIDToTypeID( "blur" );
                var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
                desc66.putUnitDouble( idblur, idpixelsUnit, glowSize );
                var idnoise = stringIDToTypeID( "noise" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc66.putUnitDouble( idnoise, idpercentUnit, 0.000000 );
                var idshadingNoise = stringIDToTypeID( "shadingNoise" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc66.putUnitDouble( idshadingNoise, idpercentUnit, 76.000000 );
                var idantiAlias = stringIDToTypeID( "antiAlias" );
                desc66.putBoolean( idantiAlias, false );
                var idtransferSpec = stringIDToTypeID( "transferSpec" );
                    var desc68 = new ActionDescriptor();
                    var idname = stringIDToTypeID( "name" );
                    desc68.putString( idname, """Cone""" );
                var idshapeCurveType = stringIDToTypeID( "shapeCurveType" );
                desc66.putObject( idtransferSpec, idshapeCurveType, desc68 );
                var idinputRange = stringIDToTypeID( "inputRange" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc66.putUnitDouble( idinputRange, idpercentUnit, 100.000000 );
                var idinnerGlowSource = stringIDToTypeID( "innerGlowSource" );
                var idinnerGlowSourceType = stringIDToTypeID( "innerGlowSourceType" );
                var idedgeGlow = stringIDToTypeID( "edgeGlow" );
                desc66.putEnumerated( idinnerGlowSource, idinnerGlowSourceType, idedgeGlow );
            var idinnerGlow = stringIDToTypeID( "innerGlow" );
            desc65.putObject( idinnerGlow, idinnerGlow, desc66 );
        var idlayerEffects = stringIDToTypeID( "layerEffects" );
        desc64.putObject( idto, idlayerEffects, desc65 );
    executeAction( idset, desc64, DialogModes.NO );

    // ======= Rasterize Effect =========================
    var idrasterizeLayer = stringIDToTypeID( "rasterizeLayer" );
        var desc69 = new ActionDescriptor();
        var idnull = stringIDToTypeID( "null" );
            var ref41 = new ActionReference();
            var idlayer = stringIDToTypeID( "layer" );
            var idordinal = stringIDToTypeID( "ordinal" );
            var idtargetEnum = stringIDToTypeID( "targetEnum" );
            ref41.putEnumerated( idlayer, idordinal, idtargetEnum );
        desc69.putReference( idnull, ref41 );
        var idwhat = stringIDToTypeID( "what" );
        var idrasterizeItem = stringIDToTypeID( "rasterizeItem" );
        var idlayerStyle = stringIDToTypeID( "layerStyle" );
        desc69.putEnumerated( idwhat, idrasterizeItem, idlayerStyle );
    executeAction( idrasterizeLayer, desc69, DialogModes.NO );
}

// ==== Background Gradients ==========
    var randomXWidth = (randomNumber(300, 500));
    var leftEyeX = (1275 - randomXWidth)
    var rightEyeX = (1275 + randomXWidth)

    var randomY = (randomNumber(800, 1100));
    var randomRad = (randomNumber(200, 600));

    var randomAng = (randomNumber(0, 360));
    var randomSat = (randomNumber(30, 100));
    var randomBri = (randomNumber(30, 100));

    // ====FOREGROUND COLOR PICKER===========
    var idset = stringIDToTypeID( "set" );
        var desc179 = new ActionDescriptor();
        var idnull = stringIDToTypeID( "null" );
            var ref44 = new ActionReference();
            var idcolor = stringIDToTypeID( "color" );
            var idforegroundColor = stringIDToTypeID( "foregroundColor" );
            ref44.putProperty( idcolor, idforegroundColor );
        desc179.putReference( idnull, ref44 );
        var idto = stringIDToTypeID( "to" );
            var desc180 = new ActionDescriptor();
            var idhue = stringIDToTypeID( "hue" );
            var idangleUnit = stringIDToTypeID( "angleUnit" );
            desc180.putUnitDouble( idhue, idangleUnit, randomAng );
            var idsaturation = stringIDToTypeID( "saturation" );
            desc180.putDouble( idsaturation, randomSat );
            var idbrightness = stringIDToTypeID( "brightness" );
            desc180.putDouble( idbrightness, randomBri );
        var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
        desc179.putObject( idto, idHSBColorClass, desc180 );
        var idsource = stringIDToTypeID( "source" );
        desc179.putString( idsource, """photoshopPicker""" );
    executeAction( idset, desc179, DialogModes.NO );

    // ===== Ellipse Selection =================================
    var idset = stringIDToTypeID( "set" );
        var desc19 = new ActionDescriptor();
        var idnull = stringIDToTypeID( "null" );
            var ref15 = new ActionReference();
            var idchannel = stringIDToTypeID( "channel" );
            var idselection = stringIDToTypeID( "selection" );
            ref15.putProperty( idchannel, idselection );
        desc19.putReference( idnull, ref15 );
        var idto = stringIDToTypeID( "to" );
            var desc20 = new ActionDescriptor();
            var idtop = stringIDToTypeID( "top" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc20.putUnitDouble( idtop, idpixelsUnit, 10.000000 );
            var idleft = stringIDToTypeID( "left" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc20.putUnitDouble( idleft, idpixelsUnit, 10.000000 );
            var idbottom = stringIDToTypeID( "bottom" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc20.putUnitDouble( idbottom, idpixelsUnit, 2540.000000 );
            var idright = stringIDToTypeID( "right" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc20.putUnitDouble( idright, idpixelsUnit, 2540.000000 );
        var idellipse = stringIDToTypeID( "ellipse" );
        desc19.putObject( idto, idellipse, desc20 );
    executeAction( idset, desc19, DialogModes.NO );

    // ==== Left-Eye Gradient ======================================
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
        var desc162 = new ActionDescriptor();
        var idfrom = stringIDToTypeID( "from" );
            var desc163 = new ActionDescriptor();
            var idhorizontal = stringIDToTypeID( "horizontal" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc163.putUnitDouble( idhorizontal, idpixelsUnit, leftEyeX );
            var idvertical = stringIDToTypeID( "vertical" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc163.putUnitDouble( idvertical, idpixelsUnit, randomY );
        var idpaint = stringIDToTypeID( "paint" );
        desc162.putObject( idfrom, idpaint, desc163 );
        var idto = stringIDToTypeID( "to" );
            var desc164 = new ActionDescriptor();
            var idhorizontal = stringIDToTypeID( "horizontal" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc164.putUnitDouble( idhorizontal, idpixelsUnit, leftEyeX );
            var idvertical = stringIDToTypeID( "vertical" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc164.putUnitDouble( idvertical, idpixelsUnit, (randomY + randomRad) );
        var idpaint = stringIDToTypeID( "paint" );
        desc162.putObject( idto, idpaint, desc164 );
        var idtype = stringIDToTypeID( "type" );
        var idgradientType = stringIDToTypeID( "gradientType" );
        var idradial = stringIDToTypeID( "radial" );
        desc162.putEnumerated( idtype, idgradientType, idradial );
        var iduseMask = stringIDToTypeID( "useMask" );
        desc162.putBoolean( iduseMask, true );
        var idgradient = stringIDToTypeID( "gradient" );
            var desc165 = new ActionDescriptor();
            var idname = stringIDToTypeID( "name" );
            desc165.putString( idname, """Foreground to Transparent""" );
            var idgradientForm = stringIDToTypeID( "gradientForm" );
            var idgradientForm = stringIDToTypeID( "gradientForm" );
            var idcustomStops = stringIDToTypeID( "customStops" );
            desc165.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
            var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
            desc165.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
            var idcolors = stringIDToTypeID( "colors" );
                var list16 = new ActionList();
                    var desc166 = new ActionDescriptor();
                    var idtype = stringIDToTypeID( "type" );
                    var idcolorStopType = stringIDToTypeID( "colorStopType" );
                    var idforegroundColor = stringIDToTypeID( "foregroundColor" );
                    desc166.putEnumerated( idtype, idcolorStopType, idforegroundColor );
                    var idlocation = stringIDToTypeID( "location" );
                    desc166.putInteger( idlocation, 0 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc166.putInteger( idmidpoint, 75 );
                var idcolorStop = stringIDToTypeID( "colorStop" );
                list16.putObject( idcolorStop, desc166 );
                    var desc167 = new ActionDescriptor();
                    var idtype = stringIDToTypeID( "type" );
                    var idcolorStopType = stringIDToTypeID( "colorStopType" );
                    var idforegroundColor = stringIDToTypeID( "foregroundColor" );
                    desc167.putEnumerated( idtype, idcolorStopType, idforegroundColor );
                    var idlocation = stringIDToTypeID( "location" );
                    desc167.putInteger( idlocation, 4096 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc167.putInteger( idmidpoint, 50 );
                var idcolorStop = stringIDToTypeID( "colorStop" );
                list16.putObject( idcolorStop, desc167 );
            desc165.putList( idcolors, list16 );
            var idtransparency = stringIDToTypeID( "transparency" );
                var list17 = new ActionList();
                    var desc168 = new ActionDescriptor();
                    var idopacity = stringIDToTypeID( "opacity" );
                    var idpercentUnit = stringIDToTypeID( "percentUnit" );
                    desc168.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                    var idlocation = stringIDToTypeID( "location" );
                    desc168.putInteger( idlocation, 0 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc168.putInteger( idmidpoint, 50 );
                var idtransferSpec = stringIDToTypeID( "transferSpec" );
                list17.putObject( idtransferSpec, desc168 );
                    var desc169 = new ActionDescriptor();
                    var idopacity = stringIDToTypeID( "opacity" );
                    var idpercentUnit = stringIDToTypeID( "percentUnit" );
                    desc169.putUnitDouble( idopacity, idpercentUnit, 0.000000 );
                    var idlocation = stringIDToTypeID( "location" );
                    desc169.putInteger( idlocation, 4096 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc169.putInteger( idmidpoint, 50 );
                var idtransferSpec = stringIDToTypeID( "transferSpec" );
                list17.putObject( idtransferSpec, desc169 );
            desc165.putList( idtransparency, list17 );
        var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
        desc162.putObject( idgradient, idgradientClassEvent, desc165 );
    executeAction( idgradientClassEvent, desc162, DialogModes.NO );

    // ==== Right-Eye Gradient ======================================
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
        var desc162 = new ActionDescriptor();
        var idfrom = stringIDToTypeID( "from" );
            var desc163 = new ActionDescriptor();
            var idhorizontal = stringIDToTypeID( "horizontal" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc163.putUnitDouble( idhorizontal, idpixelsUnit, rightEyeX );
            var idvertical = stringIDToTypeID( "vertical" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc163.putUnitDouble( idvertical, idpixelsUnit, randomY );
        var idpaint = stringIDToTypeID( "paint" );
        desc162.putObject( idfrom, idpaint, desc163 );
        var idto = stringIDToTypeID( "to" );
            var desc164 = new ActionDescriptor();
            var idhorizontal = stringIDToTypeID( "horizontal" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc164.putUnitDouble( idhorizontal, idpixelsUnit, rightEyeX );
            var idvertical = stringIDToTypeID( "vertical" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc164.putUnitDouble( idvertical, idpixelsUnit, (randomY + randomRad) );
        var idpaint = stringIDToTypeID( "paint" );
        desc162.putObject( idto, idpaint, desc164 );
        var idtype = stringIDToTypeID( "type" );
        var idgradientType = stringIDToTypeID( "gradientType" );
        var idradial = stringIDToTypeID( "radial" );
        desc162.putEnumerated( idtype, idgradientType, idradial );
        var iduseMask = stringIDToTypeID( "useMask" );
        desc162.putBoolean( iduseMask, true );
        var idgradient = stringIDToTypeID( "gradient" );
            var desc165 = new ActionDescriptor();
            var idname = stringIDToTypeID( "name" );
            desc165.putString( idname, """Foreground to Transparent""" );
            var idgradientForm = stringIDToTypeID( "gradientForm" );
            var idgradientForm = stringIDToTypeID( "gradientForm" );
            var idcustomStops = stringIDToTypeID( "customStops" );
            desc165.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
            var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
            desc165.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
            var idcolors = stringIDToTypeID( "colors" );
                var list16 = new ActionList();
                    var desc166 = new ActionDescriptor();
                    var idtype = stringIDToTypeID( "type" );
                    var idcolorStopType = stringIDToTypeID( "colorStopType" );
                    var idforegroundColor = stringIDToTypeID( "foregroundColor" );
                    desc166.putEnumerated( idtype, idcolorStopType, idforegroundColor );
                    var idlocation = stringIDToTypeID( "location" );
                    desc166.putInteger( idlocation, 0 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc166.putInteger( idmidpoint, 50 );
                var idcolorStop = stringIDToTypeID( "colorStop" );
                list16.putObject( idcolorStop, desc166 );
                    var desc167 = new ActionDescriptor();
                    var idtype = stringIDToTypeID( "type" );
                    var idcolorStopType = stringIDToTypeID( "colorStopType" );
                    var idforegroundColor = stringIDToTypeID( "foregroundColor" );
                    desc167.putEnumerated( idtype, idcolorStopType, idforegroundColor );
                    var idlocation = stringIDToTypeID( "location" );
                    desc167.putInteger( idlocation, 4096 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc167.putInteger( idmidpoint, 50 );
                var idcolorStop = stringIDToTypeID( "colorStop" );
                list16.putObject( idcolorStop, desc167 );
            desc165.putList( idcolors, list16 );
            var idtransparency = stringIDToTypeID( "transparency" );
                var list17 = new ActionList();
                    var desc168 = new ActionDescriptor();
                    var idopacity = stringIDToTypeID( "opacity" );
                    var idpercentUnit = stringIDToTypeID( "percentUnit" );
                    desc168.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                    var idlocation = stringIDToTypeID( "location" );
                    desc168.putInteger( idlocation, 0 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc168.putInteger( idmidpoint, 50 );
                var idtransferSpec = stringIDToTypeID( "transferSpec" );
                list17.putObject( idtransferSpec, desc168 );
                    var desc169 = new ActionDescriptor();
                    var idopacity = stringIDToTypeID( "opacity" );
                    var idpercentUnit = stringIDToTypeID( "percentUnit" );
                    desc169.putUnitDouble( idopacity, idpercentUnit, 0.000000 );
                    var idlocation = stringIDToTypeID( "location" );
                    desc169.putInteger( idlocation, 4096 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc169.putInteger( idmidpoint, 50 );
                var idtransferSpec = stringIDToTypeID( "transferSpec" );
                list17.putObject( idtransferSpec, desc169 );
            desc165.putList( idtransparency, list17 );
        var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
        desc162.putObject( idgradient, idgradientClassEvent, desc165 );
    executeAction( idgradientClassEvent, desc162, DialogModes.NO );

    var randomAng = (randomNumber(0, 360));
    var randomSat = (randomNumber(30, 100));
    var randomBri = (randomNumber(30, 100));

    // ====FOREGROUND COLOR PICKER===========
    var idset = stringIDToTypeID( "set" );
        var desc179 = new ActionDescriptor();
        var idnull = stringIDToTypeID( "null" );
            var ref44 = new ActionReference();
            var idcolor = stringIDToTypeID( "color" );
            var idforegroundColor = stringIDToTypeID( "foregroundColor" );
            ref44.putProperty( idcolor, idforegroundColor );
        desc179.putReference( idnull, ref44 );
        var idto = stringIDToTypeID( "to" );
            var desc180 = new ActionDescriptor();
            var idhue = stringIDToTypeID( "hue" );
            var idangleUnit = stringIDToTypeID( "angleUnit" );
            desc180.putUnitDouble( idhue, idangleUnit, randomAng );
            var idsaturation = stringIDToTypeID( "saturation" );
            desc180.putDouble( idsaturation, randomSat );
            var idbrightness = stringIDToTypeID( "brightness" );
            desc180.putDouble( idbrightness, randomBri );
        var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
        desc179.putObject( idto, idHSBColorClass, desc180 );
        var idsource = stringIDToTypeID( "source" );
        desc179.putString( idsource, """photoshopPicker""" );
    executeAction( idset, desc179, DialogModes.NO );

    // ==== Mouth Gradient ======================================
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
        var desc162 = new ActionDescriptor();
        var idfrom = stringIDToTypeID( "from" );
            var desc163 = new ActionDescriptor();
            var idhorizontal = stringIDToTypeID( "horizontal" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc163.putUnitDouble( idhorizontal, idpixelsUnit, 1275 );
            var idvertical = stringIDToTypeID( "vertical" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc163.putUnitDouble( idvertical, idpixelsUnit, 1975 );
        var idpaint = stringIDToTypeID( "paint" );
        desc162.putObject( idfrom, idpaint, desc163 );
        var idto = stringIDToTypeID( "to" );
            var desc164 = new ActionDescriptor();
            var idhorizontal = stringIDToTypeID( "horizontal" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc164.putUnitDouble( idhorizontal, idpixelsUnit, 1275 );
            var idvertical = stringIDToTypeID( "vertical" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc164.putUnitDouble( idvertical, idpixelsUnit, 800 );
        var idpaint = stringIDToTypeID( "paint" );
        desc162.putObject( idto, idpaint, desc164 );
        var idtype = stringIDToTypeID( "type" );
        var idgradientType = stringIDToTypeID( "gradientType" );
        var idradial = stringIDToTypeID( "radial" );
        desc162.putEnumerated( idtype, idgradientType, idradial );
        var iduseMask = stringIDToTypeID( "useMask" );
        desc162.putBoolean( iduseMask, true );
        var idgradient = stringIDToTypeID( "gradient" );
            var desc165 = new ActionDescriptor();
            var idname = stringIDToTypeID( "name" );
            desc165.putString( idname, """Foreground to Transparent""" );
            var idgradientForm = stringIDToTypeID( "gradientForm" );
            var idgradientForm = stringIDToTypeID( "gradientForm" );
            var idcustomStops = stringIDToTypeID( "customStops" );
            desc165.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
            var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
            desc165.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
            var idcolors = stringIDToTypeID( "colors" );
                var list16 = new ActionList();
                    var desc166 = new ActionDescriptor();
                    var idtype = stringIDToTypeID( "type" );
                    var idcolorStopType = stringIDToTypeID( "colorStopType" );
                    var idforegroundColor = stringIDToTypeID( "foregroundColor" );
                    desc166.putEnumerated( idtype, idcolorStopType, idforegroundColor );
                    var idlocation = stringIDToTypeID( "location" );
                    desc166.putInteger( idlocation, 0 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc166.putInteger( idmidpoint, 75 );
                var idcolorStop = stringIDToTypeID( "colorStop" );
                list16.putObject( idcolorStop, desc166 );
                    var desc167 = new ActionDescriptor();
                    var idtype = stringIDToTypeID( "type" );
                    var idcolorStopType = stringIDToTypeID( "colorStopType" );
                    var idforegroundColor = stringIDToTypeID( "foregroundColor" );
                    desc167.putEnumerated( idtype, idcolorStopType, idforegroundColor );
                    var idlocation = stringIDToTypeID( "location" );
                    desc167.putInteger( idlocation, 4096 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc167.putInteger( idmidpoint, 50 );
                var idcolorStop = stringIDToTypeID( "colorStop" );
                list16.putObject( idcolorStop, desc167 );
            desc165.putList( idcolors, list16 );
            var idtransparency = stringIDToTypeID( "transparency" );
                var list17 = new ActionList();
                    var desc168 = new ActionDescriptor();
                    var idopacity = stringIDToTypeID( "opacity" );
                    var idpercentUnit = stringIDToTypeID( "percentUnit" );
                    desc168.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                    var idlocation = stringIDToTypeID( "location" );
                    desc168.putInteger( idlocation, 0 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc168.putInteger( idmidpoint, 50 );
                var idtransferSpec = stringIDToTypeID( "transferSpec" );
                list17.putObject( idtransferSpec, desc168 );
                    var desc169 = new ActionDescriptor();
                    var idopacity = stringIDToTypeID( "opacity" );
                    var idpercentUnit = stringIDToTypeID( "percentUnit" );
                    desc169.putUnitDouble( idopacity, idpercentUnit, 0.000000 );
                    var idlocation = stringIDToTypeID( "location" );
                    desc169.putInteger( idlocation, 4096 );
                    var idmidpoint = stringIDToTypeID( "midpoint" );
                    desc169.putInteger( idmidpoint, 50 );
                var idtransferSpec = stringIDToTypeID( "transferSpec" );
                list17.putObject( idtransferSpec, desc169 );
            desc165.putList( idtransparency, list17 );
        var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
        desc162.putObject( idgradient, idgradientClassEvent, desc165 );
    executeAction( idgradientClassEvent, desc162, DialogModes.NO );

    // ===== Copy To Layer  ====================================
    var idcopyToLayer = stringIDToTypeID( "copyToLayer" );
    executeAction( idcopyToLayer, undefined, DialogModes.NO );

    // ===== Ellipse Selection =================================
    var idset = stringIDToTypeID( "set" );
        var desc19 = new ActionDescriptor();
        var idnull = stringIDToTypeID( "null" );
            var ref15 = new ActionReference();
            var idchannel = stringIDToTypeID( "channel" );
            var idselection = stringIDToTypeID( "selection" );
            ref15.putProperty( idchannel, idselection );
        desc19.putReference( idnull, ref15 );
        var idto = stringIDToTypeID( "to" );
            var desc20 = new ActionDescriptor();
            var idtop = stringIDToTypeID( "top" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc20.putUnitDouble( idtop, idpixelsUnit, 10.000000 );
            var idleft = stringIDToTypeID( "left" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc20.putUnitDouble( idleft, idpixelsUnit, 10.000000 );
            var idbottom = stringIDToTypeID( "bottom" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc20.putUnitDouble( idbottom, idpixelsUnit, 2540.000000 );
            var idright = stringIDToTypeID( "right" );
            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
            desc20.putUnitDouble( idright, idpixelsUnit, 2540.000000 );
        var idellipse = stringIDToTypeID( "ellipse" );
        desc19.putObject( idto, idellipse, desc20 );
    executeAction( idset, desc19, DialogModes.NO );

    // ====== Surface Blur  ================================
    var idsurfaceBlur = stringIDToTypeID( "surfaceBlur" );
        var desc1426 = new ActionDescriptor();
        var idradius = stringIDToTypeID( "radius" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc1426.putUnitDouble( idradius, idpixelsUnit, 80.000000 );
        var idthreshold = stringIDToTypeID( "threshold" );
        desc1426.putInteger( idthreshold, 150 );
    executeAction( idsurfaceBlur, desc1426, DialogModes.NO );

    // ====== Merge Down =================================
    var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
        var desc1427 = new ActionDescriptor();
    executeAction( idmergeLayersNew, desc1427, DialogModes.NO );

    // ===== Deselect All ====================================
    var idset = stringIDToTypeID( "set" );
        var desc1428 = new ActionDescriptor();
        var idnull = stringIDToTypeID( "null" );
            var ref474 = new ActionReference();
            var idchannel = stringIDToTypeID( "channel" );
            var idselection = stringIDToTypeID( "selection" );
            ref474.putProperty( idchannel, idselection );
        desc1428.putReference( idnull, ref474 );
        var idto = stringIDToTypeID( "to" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idnone = stringIDToTypeID( "none" );
        desc1428.putEnumerated( idto, idordinal, idnone );
    executeAction( idset, desc1428, DialogModes.NO );

var eyeRandom = randomNumber(1,2)
if (eyeRandom == 1){

var eyeStartX = (randomNumber(600, 800));
var eyeStartY = (randomNumber(500, 800));
var eyeWidth = (randomNumber(200, 400));
var eyeHeight = (randomNumber(eyeWidth, 800));
var eyeEndX = (eyeStartX + eyeWidth)
var eyeEndY = (eyeStartY + eyeHeight)

var eyeOutlineScale = (randomNumber(90, 95));


var randomY = (randomNumber(800, 1100));
var randomRad = (randomNumber(200, 600));

var randomAng = (randomNumber(0, 360));
var randomSat = (randomNumber(30, 100));
var randomBri = (randomNumber(30, 100));

// ===== Make New Layer ======================================
var idmake = stringIDToTypeID( "make" );
    var desc717 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref195 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        ref195.putClass( idlayer );
    desc717.putReference( idnull, ref195 );
    var idlayerID = stringIDToTypeID( "layerID" );
    desc717.putInteger( idlayerID, 14 );
executeAction( idmake, desc717, DialogModes.NO );

// ===== Ellipse Selection ================================
var idset = stringIDToTypeID( "set" );
    var desc687 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref180 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref180.putProperty( idchannel, idselection );
    desc687.putReference( idnull, ref180 );
    var idto = stringIDToTypeID( "to" );
        var desc688 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc688.putUnitDouble( idtop, idpixelsUnit, eyeStartX );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc688.putUnitDouble( idleft, idpixelsUnit, eyeStartY );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc688.putUnitDouble( idbottom, idpixelsUnit, eyeEndY );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc688.putUnitDouble( idright, idpixelsUnit, eyeEndX );
    var idellipse = stringIDToTypeID( "ellipse" );
    desc687.putObject( idto, idellipse, desc688 );
executeAction( idset, desc687, DialogModes.NO );

var randomX1  = (randomNumber(0, 2550));
var randomX2  = (randomNumber(0, 2550));
var randomY1  = (randomNumber(0, 2550));
var randomY2  = (randomNumber(0, 2550));

var randomR1 = (randomNumber(0, 255));
var randomG1 = (randomNumber(0, 255));
var randomB1 = (randomNumber(0, 255));

var randomR2 = (randomNumber(0, 255));
var randomG2 = (randomNumber(0, 255));
var randomB2 = (randomNumber(0, 255));

var randomR3 = (randomNumber(0, 255));
var randomG3 = (randomNumber(0, 255));
var randomB3 = (randomNumber(0, 255));


// =======================================================
var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    var desc690 = new ActionDescriptor();
    var idfrom = stringIDToTypeID( "from" );
        var desc691 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idhorizontal, idpixelsUnit, randomX1 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idvertical, idpixelsUnit, randomY1 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idfrom, idpaint, desc691 );
    var idto = stringIDToTypeID( "to" );
        var desc692 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idhorizontal, idpixelsUnit, randomX2 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idvertical, idpixelsUnit, randomY2 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idto, idpaint, desc692 );
    var idtype = stringIDToTypeID( "type" );
    var idgradientType = stringIDToTypeID( "gradientType" );
    var idradial = stringIDToTypeID( "radial" );
    desc690.putEnumerated( idtype, idgradientType, idradial );
    var iduseMask = stringIDToTypeID( "useMask" );
    desc690.putBoolean( iduseMask, true );
    var idgradient = stringIDToTypeID( "gradient" );
        var desc693 = new ActionDescriptor();
        var idname = stringIDToTypeID( "name" );
        desc693.putString( idname, """Violet, Orange""" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idcustomStops = stringIDToTypeID( "customStops" );
        desc693.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
        var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
        desc693.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
        var idcolors = stringIDToTypeID( "colors" );
            var list108 = new ActionList();
                var desc694 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc695 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc695.putDouble( idred, randomR1 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc695.putDouble( idgrain, randomG1 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc695.putDouble( idblue, randomB1 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc694.putObject( idcolor, idRGBColor, desc695 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc694.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc694.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc694.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc694 );
                var desc696 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc697 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc697.putDouble( idred, randomR2 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc697.putDouble( idgrain, randomG2 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc697.putDouble( idblue, randomB2 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc696.putObject( idcolor, idRGBColor, desc697 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc696.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc696.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc696.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc696 );
        desc693.putList( idcolors, list108 );
        var idtransparency = stringIDToTypeID( "transparency" );
            var list109 = new ActionList();
                var desc698 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc698.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc698.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc698.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc698 );
                var desc699 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc699.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc699.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc699.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc699 );
        desc693.putList( idtransparency, list109 );
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    desc690.putObject( idgradient, idgradientClassEvent, desc693 );
executeAction( idgradientClassEvent, desc690, DialogModes.NO );

// =======================================================
var idcopyToLayer = stringIDToTypeID( "copyToLayer" );
executeAction( idcopyToLayer, undefined, DialogModes.NO );

// =======================================================
var idinvert = stringIDToTypeID( "invert" );
executeAction( idinvert, undefined, DialogModes.NO );

// =======================================================
var idselect = stringIDToTypeID( "select" );
    var desc701 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref182 = new ActionReference();
        var idmoveTool = stringIDToTypeID( "moveTool" );
        ref182.putClass( idmoveTool );
    desc701.putReference( idnull, ref182 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc701.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc701.putBoolean( idforceNotify, true );
executeAction( idselect, desc701, DialogModes.NO );

// =======================================================
var idtransform = stringIDToTypeID( "transform" );
    var desc702 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref183 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref183.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc702.putReference( idnull, ref183 );
    var idfreeTransformCenterState = stringIDToTypeID( "freeTransformCenterState" );
    var idquadCenterState = stringIDToTypeID( "quadCenterState" );
    var idQCSAverage = stringIDToTypeID( "QCSAverage" );
    desc702.putEnumerated( idfreeTransformCenterState, idquadCenterState, idQCSAverage );
    var idoffset = stringIDToTypeID( "offset" );
        var desc703 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc703.putUnitDouble( idhorizontal, idpixelsUnit, -0.000000 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc703.putUnitDouble( idvertical, idpixelsUnit, 0.000000 );
    var idoffset = stringIDToTypeID( "offset" );
    desc702.putObject( idoffset, idoffset, desc703 );
    var idwidth = stringIDToTypeID( "width" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc702.putUnitDouble( idwidth, idpercentUnit, eyeOutlineScale );
    var idheight = stringIDToTypeID( "height" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc702.putUnitDouble( idheight, idpercentUnit, eyeOutlineScale );
    var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
    var idinterpolationType = stringIDToTypeID( "interpolationType" );
    var idbicubic = stringIDToTypeID( "bicubic" );
    desc702.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubic );
executeAction( idtransform, desc702, DialogModes.NO );

// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc704 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc704, DialogModes.NO );

var randomStr = (randomNumber(10, 40));
var randomAng1 = (randomNumber(0, 360));
var randomSat1 = (randomNumber(30, 100));
var randomBri1 = (randomNumber(30, 100));

// ===== Stroke Outline =====================
var idstroke = stringIDToTypeID( "stroke" );
    var desc1822 = new ActionDescriptor();
    var idwidth = stringIDToTypeID( "width" );
    desc1822.putInteger( idwidth, randomStr );
    var idlocation = stringIDToTypeID( "location" );
    var idstrokeLength = stringIDToTypeID( "strokeLength" );
    var idoutside = stringIDToTypeID( "outside" );
    desc1822.putEnumerated( idlocation, idstrokeLength, idoutside );
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc1822.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idmode = stringIDToTypeID( "mode" );
    var idblendMode = stringIDToTypeID( "blendMode" );
    var idnormal = stringIDToTypeID( "normal" );
    desc1822.putEnumerated( idmode, idblendMode, idnormal );
    var idcolor = stringIDToTypeID( "color" );
        var desc1823 = new ActionDescriptor();
        var idhue = stringIDToTypeID( "hue" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc1823.putUnitDouble( idhue, idangleUnit, randomAng1 );
        var idsaturation = stringIDToTypeID( "saturation" );
        desc1823.putDouble( idsaturation, randomSat1 );
        var idbrightness = stringIDToTypeID( "brightness" );
        desc1823.putDouble( idbrightness, randomBri1 );
    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
    desc1822.putObject( idcolor, idHSBColorClass, desc1823 );
executeAction( idstroke, desc1822, DialogModes.NO );

// =======================================================
var idcopyToLayer = stringIDToTypeID( "copyToLayer" );
executeAction( idcopyToLayer, undefined, DialogModes.NO );

// Selects Enitre Layer and Flips Horizontal, great for eyes!

// ===== Select Entire Layer ===========================
var idset = stringIDToTypeID( "set" );
    var desc674 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref167 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref167.putProperty( idchannel, idselection );
    desc674.putReference( idnull, ref167 );
    var idto = stringIDToTypeID( "to" );
    var idordinal = stringIDToTypeID( "ordinal" );
    var idallEnum = stringIDToTypeID( "allEnum" );
    desc674.putEnumerated( idto, idordinal, idallEnum );
executeAction( idset, desc674, DialogModes.NO );

// ===== Horizontal Flip ===========================
var idflip = stringIDToTypeID( "flip" );
    var desc675 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref168 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref168.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc675.putReference( idnull, ref168 );
    var idaxis = stringIDToTypeID( "axis" );
    var idorientation = stringIDToTypeID( "orientation" );
    var idhorizontal = stringIDToTypeID( "horizontal" );
    desc675.putEnumerated( idaxis, idorientation, idhorizontal );
executeAction( idflip, desc675, DialogModes.NO );

// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc704 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc704, DialogModes.NO );

// ===== Deselect all =========================
var idset = stringIDToTypeID( "set" );
    var desc786 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref216 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref216.putProperty( idchannel, idselection );
    desc786.putReference( idnull, ref216 );
    var idto = stringIDToTypeID( "to" );
    var idordinal = stringIDToTypeID( "ordinal" );
    var idnone = stringIDToTypeID( "none" );
    desc786.putEnumerated( idto, idordinal, idnone );
executeAction( idset, desc786, DialogModes.NO );

// ===== Wave Filter (1/2 Chance) ====================================
var waveChance = randomNumber(1,2);
if (waveChance == 1){
    var idwave = stringIDToTypeID( "wave" );
        var desc1150 = new ActionDescriptor();
        var idwaveType = stringIDToTypeID( "waveType" );
        var idwaveType = stringIDToTypeID( "waveType" );
        var idwaveSine = stringIDToTypeID( "waveSine" );
        desc1150.putEnumerated( idwaveType, idwaveType, idwaveSine );
        var idnumberOfGenerators = stringIDToTypeID( "numberOfGenerators" );
        desc1150.putInteger( idnumberOfGenerators, 2 );
        var idwavelengthMin = stringIDToTypeID( "wavelengthMin" );
        desc1150.putInteger( idwavelengthMin, 694 );
        var idwavelengthMax = stringIDToTypeID( "wavelengthMax" );
        desc1150.putInteger( idwavelengthMax, 999 );
        var idamplitudeMin = stringIDToTypeID( "amplitudeMin" );
        desc1150.putInteger( idamplitudeMin, 1 );
        var idamplitudeMax = stringIDToTypeID( "amplitudeMax" );
        desc1150.putInteger( idamplitudeMax, 749 );
        var idscaleHorizontal = stringIDToTypeID( "scaleHorizontal" );
        desc1150.putInteger( idscaleHorizontal, 100 );
        var idscaleVertical = stringIDToTypeID( "scaleVertical" );
        desc1150.putInteger( idscaleVertical, 100 );
        var idundefinedArea = stringIDToTypeID( "undefinedArea" );
        var idundefinedArea = stringIDToTypeID( "undefinedArea" );
        var idrepeatEdgePixels = stringIDToTypeID( "repeatEdgePixels" );
        desc1150.putEnumerated( idundefinedArea, idundefinedArea, idrepeatEdgePixels );
        var idrandomSeed = stringIDToTypeID( "randomSeed" );
        desc1150.putInteger( idrandomSeed, 13148940 );
    executeAction( idwave, desc1150, DialogModes.NO );
}
// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc704 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc704, DialogModes.NO );
}
if (eyeRandom == 2){
// ===== Eye Making Section - Curved Up or Curved Down =============


// Random Math
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// ===== Make New Layer ======================================
var idmake = stringIDToTypeID( "make" );
    var desc717 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref195 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        ref195.putClass( idlayer );
    desc717.putReference( idnull, ref195 );
    var idlayerID = stringIDToTypeID( "layerID" );
    desc717.putInteger( idlayerID, 14 );
executeAction( idmake, desc717, DialogModes.NO );

// ===== Ellipse Selection ================================

	var eyeStartX = (randomNumber(600, 800));
	var eyeStartY = (randomNumber(500, 800));
	var eyeWidth = (randomNumber(200, 400));
	var eyeHeight = (randomNumber(eyeWidth, 800));
	var eyeEndX = eyeStartX + eyeWidth;
	var eyeEndY = eyeStartY + eyeHeight;
	// curve up vs curve down change y value
	
	var curveRandom = randomNumber(1,2);

	if (curveRandom == 1){
	// eyes curve up
	var eyeWidth2 = (randomNumber(-50, 300));
	var eyeStartX2 = eyeStartX - eyeWidth2;
	var eyeStartY2 = eyeStartY + (eyeHeight / 3) + (randomNumber(-100, 300));
	var eyeEndX2 = eyeEndX + eyeWidth2;
	var eyeEndY2 = eyeEndY + (randomNumber(10, 200));
	}
	if (curveRandom == 2){
	// eyes curve down
	var eyeWidth2 = (randomNumber(-50, 300));
	var eyeStartX2 = eyeStartX - eyeWidth2;
	var eyeStartY2 = eyeStartY - (eyeHeight / 3) - (randomNumber(-100, 300));
	var eyeEndX2 = eyeEndX + eyeWidth2;
	var eyeEndY2 = eyeEndY - (randomNumber(10, 200));
	}

	var idset = stringIDToTypeID( "set" );
	    var desc687 = new ActionDescriptor();
	    var idnull = stringIDToTypeID( "null" );
	        var ref180 = new ActionReference();
	        var idchannel = stringIDToTypeID( "channel" );
	        var idselection = stringIDToTypeID( "selection" );
	        ref180.putProperty( idchannel, idselection );
	    desc687.putReference( idnull, ref180 );
	    var idto = stringIDToTypeID( "to" );
	        var desc688 = new ActionDescriptor();
	        var idtop = stringIDToTypeID( "top" );
	        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
	        desc688.putUnitDouble( idtop, idpixelsUnit, eyeStartX );
	        var idleft = stringIDToTypeID( "left" );
	        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
	        desc688.putUnitDouble( idleft, idpixelsUnit, eyeStartY );
	        var idbottom = stringIDToTypeID( "bottom" );
	        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
	        desc688.putUnitDouble( idbottom, idpixelsUnit, eyeEndY );
	        var idright = stringIDToTypeID( "right" );
	        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
	        desc688.putUnitDouble( idright, idpixelsUnit, eyeEndX );
	    var idellipse = stringIDToTypeID( "ellipse" );
	    desc687.putObject( idto, idellipse, desc688 );
	executeAction( idset, desc687, DialogModes.NO );

	// ===== Ellipse Subtraction Below ============================

		var idsubtractFrom = stringIDToTypeID( "subtractFrom" );
		    var desc194 = new ActionDescriptor();
		    var idnull = stringIDToTypeID( "null" );
		        var ref93 = new ActionReference();
		        var idchannel = stringIDToTypeID( "channel" );
		        var idselection = stringIDToTypeID( "selection" );
		        ref93.putProperty( idchannel, idselection );
		    desc194.putReference( idnull, ref93 );
		    var idto = stringIDToTypeID( "to" );
		        var desc195 = new ActionDescriptor();
		        var idtop = stringIDToTypeID( "top" );
		        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
		        desc195.putUnitDouble( idtop, idpixelsUnit, eyeStartY2 );
		        var idleft = stringIDToTypeID( "left" );
		        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
		        desc195.putUnitDouble( idleft, idpixelsUnit, eyeStartX2 );
		        var idbottom = stringIDToTypeID( "bottom" );
		        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
		        desc195.putUnitDouble( idbottom, idpixelsUnit, eyeEndY2 );
		        var idright = stringIDToTypeID( "right" );
		        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
		        desc195.putUnitDouble( idright, idpixelsUnit, eyeEndX2);
		    var idellipse = stringIDToTypeID( "ellipse" );
		    desc194.putObject( idto, idellipse, desc195 );
		executeAction( idsubtractFrom, desc194, DialogModes.NO );

var randomX1  = (randomNumber(0, 2550));
var randomX2  = (randomNumber(0, 2550));
var randomY1  = (randomNumber(0, 2550));
var randomY2  = (randomNumber(0, 2550));

var randomR1 = (randomNumber(0, 255));
var randomG1 = (randomNumber(0, 255));
var randomB1 = (randomNumber(0, 255));

var randomR2 = (randomNumber(0, 255));
var randomG2 = (randomNumber(0, 255));
var randomB2 = (randomNumber(0, 255));

var randomR3 = (randomNumber(0, 255));
var randomG3 = (randomNumber(0, 255));
var randomB3 = (randomNumber(0, 255));


// =======================================================
var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    var desc690 = new ActionDescriptor();
    var idfrom = stringIDToTypeID( "from" );
        var desc691 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idhorizontal, idpixelsUnit, randomX1 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idvertical, idpixelsUnit, randomY1 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idfrom, idpaint, desc691 );
    var idto = stringIDToTypeID( "to" );
        var desc692 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idhorizontal, idpixelsUnit, randomX2 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idvertical, idpixelsUnit, randomY2 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idto, idpaint, desc692 );
    var idtype = stringIDToTypeID( "type" );
    var idgradientType = stringIDToTypeID( "gradientType" );
    var idradial = stringIDToTypeID( "radial" );
    desc690.putEnumerated( idtype, idgradientType, idradial );
    var iduseMask = stringIDToTypeID( "useMask" );
    desc690.putBoolean( iduseMask, true );
    var idgradient = stringIDToTypeID( "gradient" );
        var desc693 = new ActionDescriptor();
        var idname = stringIDToTypeID( "name" );
        desc693.putString( idname, """Violet, Orange""" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idcustomStops = stringIDToTypeID( "customStops" );
        desc693.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
        var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
        desc693.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
        var idcolors = stringIDToTypeID( "colors" );
            var list108 = new ActionList();
                var desc694 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc695 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc695.putDouble( idred, randomR1 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc695.putDouble( idgrain, randomG1 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc695.putDouble( idblue, randomB1 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc694.putObject( idcolor, idRGBColor, desc695 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc694.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc694.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc694.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc694 );
                var desc696 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc697 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc697.putDouble( idred, randomR2 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc697.putDouble( idgrain, randomG2 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc697.putDouble( idblue, randomB2 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc696.putObject( idcolor, idRGBColor, desc697 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc696.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc696.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc696.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc696 );
        desc693.putList( idcolors, list108 );
        var idtransparency = stringIDToTypeID( "transparency" );
            var list109 = new ActionList();
                var desc698 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc698.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc698.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc698.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc698 );
                var desc699 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc699.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc699.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc699.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc699 );
        desc693.putList( idtransparency, list109 );
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    desc690.putObject( idgradient, idgradientClassEvent, desc693 );
executeAction( idgradientClassEvent, desc690, DialogModes.NO );

// =======================================================
var idcopyToLayer = stringIDToTypeID( "copyToLayer" );
executeAction( idcopyToLayer, undefined, DialogModes.NO );

// =======================================================
var idinvert = stringIDToTypeID( "invert" );
executeAction( idinvert, undefined, DialogModes.NO );

// =======================================================
var idselect = stringIDToTypeID( "select" );
    var desc701 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref182 = new ActionReference();
        var idmoveTool = stringIDToTypeID( "moveTool" );
        ref182.putClass( idmoveTool );
    desc701.putReference( idnull, ref182 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc701.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc701.putBoolean( idforceNotify, true );
executeAction( idselect, desc701, DialogModes.NO );

// =======================================================
var eyeOutlineScale = (randomNumber(90, 95));
var idtransform = stringIDToTypeID( "transform" );
    var desc702 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref183 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref183.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc702.putReference( idnull, ref183 );
    var idfreeTransformCenterState = stringIDToTypeID( "freeTransformCenterState" );
    var idquadCenterState = stringIDToTypeID( "quadCenterState" );
    var idQCSAverage = stringIDToTypeID( "QCSAverage" );
    desc702.putEnumerated( idfreeTransformCenterState, idquadCenterState, idQCSAverage );
    var idoffset = stringIDToTypeID( "offset" );
        var desc703 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc703.putUnitDouble( idhorizontal, idpixelsUnit, -0.000000 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc703.putUnitDouble( idvertical, idpixelsUnit, 0.000000 );
    var idoffset = stringIDToTypeID( "offset" );
    desc702.putObject( idoffset, idoffset, desc703 );
    var idwidth = stringIDToTypeID( "width" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc702.putUnitDouble( idwidth, idpercentUnit, eyeOutlineScale );
    var idheight = stringIDToTypeID( "height" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc702.putUnitDouble( idheight, idpercentUnit, eyeOutlineScale );
    var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
    var idinterpolationType = stringIDToTypeID( "interpolationType" );
    var idbicubic = stringIDToTypeID( "bicubic" );
    desc702.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubic );
executeAction( idtransform, desc702, DialogModes.NO );

// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc704 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc704, DialogModes.NO );

var randomStr = (randomNumber(10, 40));
var randomAng1 = (randomNumber(0, 360));
var randomSat1 = (randomNumber(30, 100));
var randomBri1 = (randomNumber(30, 100));

// ===== Inner Shadow on Eye (1/2 Chance) ================
var innerShadowChance = randomNumber(1, 2)
if (innerShadowChance == 1){
	// =======================================================
	var idset = stringIDToTypeID( "set" );
	    var desc251 = new ActionDescriptor();
	    var idnull = stringIDToTypeID( "null" );
	        var ref137 = new ActionReference();
	        var idproperty = stringIDToTypeID( "property" );
	        var idlayerEffects = stringIDToTypeID( "layerEffects" );
	        ref137.putProperty( idproperty, idlayerEffects );
	        var idlayer = stringIDToTypeID( "layer" );
	        var idordinal = stringIDToTypeID( "ordinal" );
	        var idtargetEnum = stringIDToTypeID( "targetEnum" );
	        ref137.putEnumerated( idlayer, idordinal, idtargetEnum );
	    desc251.putReference( idnull, ref137 );
	    var idto = stringIDToTypeID( "to" );
	        var desc252 = new ActionDescriptor();
	        var idscale = stringIDToTypeID( "scale" );
	        var idpercentUnit = stringIDToTypeID( "percentUnit" );
	        desc252.putUnitDouble( idscale, idpercentUnit, 416.666667 );
	        var idinnerShadow = stringIDToTypeID( "innerShadow" );
	            var desc253 = new ActionDescriptor();
	            var idenabled = stringIDToTypeID( "enabled" );
	            desc253.putBoolean( idenabled, true );
	            var idpresent = stringIDToTypeID( "present" );
	            desc253.putBoolean( idpresent, true );
	            var idshowInDialog = stringIDToTypeID( "showInDialog" );
	            desc253.putBoolean( idshowInDialog, true );
	            var idmode = stringIDToTypeID( "mode" );
	            var idblendMode = stringIDToTypeID( "blendMode" );
	            var idmultiply = stringIDToTypeID( "multiply" );
	            desc253.putEnumerated( idmode, idblendMode, idmultiply );
	            var idcolor = stringIDToTypeID( "color" );
	                var desc254 = new ActionDescriptor();
	                var idred = stringIDToTypeID( "red" );
	                desc254.putDouble( idred, 0.000000 );
	                var idgrain = stringIDToTypeID( "grain" );
	                desc254.putDouble( idgrain, 0.000000 );
	                var idblue = stringIDToTypeID( "blue" );
	                desc254.putDouble( idblue, 0.000000 );
	            var idRGBColor = stringIDToTypeID( "RGBColor" );
	            desc253.putObject( idcolor, idRGBColor, desc254 );
	            var idopacity = stringIDToTypeID( "opacity" );
	            var idpercentUnit = stringIDToTypeID( "percentUnit" );
	            desc253.putUnitDouble( idopacity, idpercentUnit, 50.000000 );
	            var iduseGlobalAngle = stringIDToTypeID( "useGlobalAngle" );
	            desc253.putBoolean( iduseGlobalAngle, true );
	            var idlocalLightingAngle = stringIDToTypeID( "localLightingAngle" );
	            var idangleUnit = stringIDToTypeID( "angleUnit" );
	            desc253.putUnitDouble( idlocalLightingAngle, idangleUnit, 0.000000 );
	            var iddistance = stringIDToTypeID( "distance" );
	            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
	            desc253.putUnitDouble( iddistance, idpixelsUnit, 37.000000 );
	            var idchokeMatte = stringIDToTypeID( "chokeMatte" );
	            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
	            desc253.putUnitDouble( idchokeMatte, idpixelsUnit, 50.000000 );
	            var idblur = stringIDToTypeID( "blur" );
	            var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
	            desc253.putUnitDouble( idblur, idpixelsUnit, 70.000000 );
	            var idnoise = stringIDToTypeID( "noise" );
	            var idpercentUnit = stringIDToTypeID( "percentUnit" );
	            desc253.putUnitDouble( idnoise, idpercentUnit, 0.000000 );
	            var idantiAlias = stringIDToTypeID( "antiAlias" );
	            desc253.putBoolean( idantiAlias, false );
	            var idtransferSpec = stringIDToTypeID( "transferSpec" );
	                var desc255 = new ActionDescriptor();
	                var idname = stringIDToTypeID( "name" );
	                desc255.putString( idname, """Linear""" );
	            var idshapeCurveType = stringIDToTypeID( "shapeCurveType" );
	            desc253.putObject( idtransferSpec, idshapeCurveType, desc255 );
	        var idinnerShadow = stringIDToTypeID( "innerShadow" );
	        desc252.putObject( idinnerShadow, idinnerShadow, desc253 );
	    var idlayerEffects = stringIDToTypeID( "layerEffects" );
	    desc251.putObject( idto, idlayerEffects, desc252 );
	executeAction( idset, desc251, DialogModes.NO );

	// =======================================================
	var idrasterizeLayer = stringIDToTypeID( "rasterizeLayer" );
	    var desc256 = new ActionDescriptor();
	    var idnull = stringIDToTypeID( "null" );
	        var ref138 = new ActionReference();
	        var idlayer = stringIDToTypeID( "layer" );
	        var idordinal = stringIDToTypeID( "ordinal" );
	        var idtargetEnum = stringIDToTypeID( "targetEnum" );
	        ref138.putEnumerated( idlayer, idordinal, idtargetEnum );
	    desc256.putReference( idnull, ref138 );
	    var idwhat = stringIDToTypeID( "what" );
	    var idrasterizeItem = stringIDToTypeID( "rasterizeItem" );
	    var idlayerStyle = stringIDToTypeID( "layerStyle" );
	    desc256.putEnumerated( idwhat, idrasterizeItem, idlayerStyle );
	executeAction( idrasterizeLayer, desc256, DialogModes.NO );
}

// ===== Stroke Outline =====================
var idstroke = stringIDToTypeID( "stroke" );
    var desc1822 = new ActionDescriptor();
    var idwidth = stringIDToTypeID( "width" );
    desc1822.putInteger( idwidth, randomStr );
    var idlocation = stringIDToTypeID( "location" );
    var idstrokeLength = stringIDToTypeID( "strokeLength" );
    var idoutside = stringIDToTypeID( "outside" );
    desc1822.putEnumerated( idlocation, idstrokeLength, idoutside );
    var idopacity = stringIDToTypeID( "opacity" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc1822.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
    var idmode = stringIDToTypeID( "mode" );
    var idblendMode = stringIDToTypeID( "blendMode" );
    var idnormal = stringIDToTypeID( "normal" );
    desc1822.putEnumerated( idmode, idblendMode, idnormal );
    var idcolor = stringIDToTypeID( "color" );
        var desc1823 = new ActionDescriptor();
        var idhue = stringIDToTypeID( "hue" );
        var idangleUnit = stringIDToTypeID( "angleUnit" );
        desc1823.putUnitDouble( idhue, idangleUnit, randomAng1 );
        var idsaturation = stringIDToTypeID( "saturation" );
        desc1823.putDouble( idsaturation, randomSat1 );
        var idbrightness = stringIDToTypeID( "brightness" );
        desc1823.putDouble( idbrightness, randomBri1 );
    var idHSBColorClass = stringIDToTypeID( "HSBColorClass" );
    desc1822.putObject( idcolor, idHSBColorClass, desc1823 );
executeAction( idstroke, desc1822, DialogModes.NO );

// Selects Enitre Layer and Flips Horizontal, great for eyes!

// ===== Wave Filter ====================================
var waveChance = randomNumber(1,2);
if (waveChance == 1){
	var idwave = stringIDToTypeID( "wave" );
	    var desc1150 = new ActionDescriptor();
	    var idwaveType = stringIDToTypeID( "waveType" );
	    var idwaveType = stringIDToTypeID( "waveType" );
	    var idwaveSine = stringIDToTypeID( "waveSine" );
	    desc1150.putEnumerated( idwaveType, idwaveType, idwaveSine );
	    var idnumberOfGenerators = stringIDToTypeID( "numberOfGenerators" );
	    desc1150.putInteger( idnumberOfGenerators, 2 );
	    var idwavelengthMin = stringIDToTypeID( "wavelengthMin" );
	    desc1150.putInteger( idwavelengthMin, 694 );
	    var idwavelengthMax = stringIDToTypeID( "wavelengthMax" );
	    desc1150.putInteger( idwavelengthMax, 999 );
	    var idamplitudeMin = stringIDToTypeID( "amplitudeMin" );
	    desc1150.putInteger( idamplitudeMin, 1 );
	    var idamplitudeMax = stringIDToTypeID( "amplitudeMax" );
	    desc1150.putInteger( idamplitudeMax, 749 );
	    var idscaleHorizontal = stringIDToTypeID( "scaleHorizontal" );
	    desc1150.putInteger( idscaleHorizontal, 100 );
	    var idscaleVertical = stringIDToTypeID( "scaleVertical" );
	    desc1150.putInteger( idscaleVertical, 100 );
	    var idundefinedArea = stringIDToTypeID( "undefinedArea" );
	    var idundefinedArea = stringIDToTypeID( "undefinedArea" );
	    var idrepeatEdgePixels = stringIDToTypeID( "repeatEdgePixels" );
	    desc1150.putEnumerated( idundefinedArea, idundefinedArea, idrepeatEdgePixels );
	    var idrandomSeed = stringIDToTypeID( "randomSeed" );
	    desc1150.putInteger( idrandomSeed, 13148940 );
	executeAction( idwave, desc1150, DialogModes.NO );
}

// ===== Scale Eye (3/4) ===============================
var scaleChance = randomNumber(1, 4);
var eyeScale = randomNumber(110, 150);
if (scaleChance <= 3){
	var idtransform = stringIDToTypeID( "transform" );
	    var desc234 = new ActionDescriptor();
	    var idnull = stringIDToTypeID( "null" );
	        var ref121 = new ActionReference();
	        var idlayer = stringIDToTypeID( "layer" );
	        var idordinal = stringIDToTypeID( "ordinal" );
	        var idtargetEnum = stringIDToTypeID( "targetEnum" );
	        ref121.putEnumerated( idlayer, idordinal, idtargetEnum );
	    desc234.putReference( idnull, ref121 );
	    var idfreeTransformCenterState = stringIDToTypeID( "freeTransformCenterState" );
	    var idquadCenterState = stringIDToTypeID( "quadCenterState" );
	    var idQCSAverage = stringIDToTypeID( "QCSAverage" );
	    desc234.putEnumerated( idfreeTransformCenterState, idquadCenterState, idQCSAverage );
	    var idoffset = stringIDToTypeID( "offset" );
	        var desc235 = new ActionDescriptor();
	        var idhorizontal = stringIDToTypeID( "horizontal" );
	        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
	        desc235.putUnitDouble( idhorizontal, idpixelsUnit, 0.000000 );
	        var idvertical = stringIDToTypeID( "vertical" );
	        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
	        desc235.putUnitDouble( idvertical, idpixelsUnit, 0.000000 );
	    var idoffset = stringIDToTypeID( "offset" );
	    desc234.putObject( idoffset, idoffset, desc235 );
	    var idwidth = stringIDToTypeID( "width" );
	    var idpercentUnit = stringIDToTypeID( "percentUnit" );
	    desc234.putUnitDouble( idwidth, idpercentUnit, eyeScale );
	    var idheight = stringIDToTypeID( "height" );
	    var idpercentUnit = stringIDToTypeID( "percentUnit" );
	    desc234.putUnitDouble( idheight, idpercentUnit, eyeScale );
	    var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
	    var idinterpolationType = stringIDToTypeID( "interpolationType" );
	    var idbicubic = stringIDToTypeID( "bicubic" );
	    desc234.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubic );
	executeAction( idtransform, desc234, DialogModes.NO );
}
// =======================================================
var idcopyToLayer = stringIDToTypeID( "copyToLayer" );
executeAction( idcopyToLayer, undefined, DialogModes.NO );



// ===== Select Entire Layer ===========================
var idset = stringIDToTypeID( "set" );
    var desc674 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref167 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref167.putProperty( idchannel, idselection );
    desc674.putReference( idnull, ref167 );
    var idto = stringIDToTypeID( "to" );
    var idordinal = stringIDToTypeID( "ordinal" );
    var idallEnum = stringIDToTypeID( "allEnum" );
    desc674.putEnumerated( idto, idordinal, idallEnum );
executeAction( idset, desc674, DialogModes.NO );

// ===== Horizontal Flip ===========================
var idflip = stringIDToTypeID( "flip" );
    var desc675 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref168 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref168.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc675.putReference( idnull, ref168 );
    var idaxis = stringIDToTypeID( "axis" );
    var idorientation = stringIDToTypeID( "orientation" );
    var idhorizontal = stringIDToTypeID( "horizontal" );
    desc675.putEnumerated( idaxis, idorientation, idhorizontal );
executeAction( idflip, desc675, DialogModes.NO );

// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc704 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc704, DialogModes.NO );

// ===== Wave Filter ====================================
var waveChance = randomNumber(1,2);
if (waveChance == 1){
	var idwave = stringIDToTypeID( "wave" );
	    var desc1150 = new ActionDescriptor();
	    var idwaveType = stringIDToTypeID( "waveType" );
	    var idwaveType = stringIDToTypeID( "waveType" );
	    var idwaveSine = stringIDToTypeID( "waveSine" );
	    desc1150.putEnumerated( idwaveType, idwaveType, idwaveSine );
	    var idnumberOfGenerators = stringIDToTypeID( "numberOfGenerators" );
	    desc1150.putInteger( idnumberOfGenerators, 2 );
	    var idwavelengthMin = stringIDToTypeID( "wavelengthMin" );
	    desc1150.putInteger( idwavelengthMin, 694 );
	    var idwavelengthMax = stringIDToTypeID( "wavelengthMax" );
	    desc1150.putInteger( idwavelengthMax, 999 );
	    var idamplitudeMin = stringIDToTypeID( "amplitudeMin" );
	    desc1150.putInteger( idamplitudeMin, 1 );
	    var idamplitudeMax = stringIDToTypeID( "amplitudeMax" );
	    desc1150.putInteger( idamplitudeMax, 749 );
	    var idscaleHorizontal = stringIDToTypeID( "scaleHorizontal" );
	    desc1150.putInteger( idscaleHorizontal, 100 );
	    var idscaleVertical = stringIDToTypeID( "scaleVertical" );
	    desc1150.putInteger( idscaleVertical, 100 );
	    var idundefinedArea = stringIDToTypeID( "undefinedArea" );
	    var idundefinedArea = stringIDToTypeID( "undefinedArea" );
	    var idrepeatEdgePixels = stringIDToTypeID( "repeatEdgePixels" );
	    desc1150.putEnumerated( idundefinedArea, idundefinedArea, idrepeatEdgePixels );
	    var idrandomSeed = stringIDToTypeID( "randomSeed" );
	    desc1150.putInteger( idrandomSeed, 13148940 );
	executeAction( idwave, desc1150, DialogModes.NO );
}

// ===== Deselect all =========================
var idset = stringIDToTypeID( "set" );
    var desc786 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref216 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref216.putProperty( idchannel, idselection );
    desc786.putReference( idnull, ref216 );
    var idto = stringIDToTypeID( "to" );
    var idordinal = stringIDToTypeID( "ordinal" );
    var idnone = stringIDToTypeID( "none" );
    desc786.putEnumerated( idto, idordinal, idnone );
executeAction( idset, desc786, DialogModes.NO );

// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc704 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc704, DialogModes.NO );
}

var mouthRandom = randomNumber(1,2);
if (mouthRandom == 1){

// ===== Make a New Layer ==========================
var idmake = stringIDToTypeID( "make" );
    var desc799 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref227 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        ref227.putClass( idlayer );
    desc799.putReference( idnull, ref227 );
    var idlayerID = stringIDToTypeID( "layerID" );
    desc799.putInteger( idlayerID, 2 );
executeAction( idmake, desc799, DialogModes.NO );


randomTop1 = 1350
randomLeft1 = 600
randomBottom1 = 2000
randomRight1 = 1950


// ===== Lower - Outer Mouth Ellipse =============================
var idset = stringIDToTypeID( "set" );
    var desc1070 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref289 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref289.putProperty( idchannel, idselection );
    desc1070.putReference( idnull, ref289 );
    var idto = stringIDToTypeID( "to" );
        var desc1071 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc1071.putUnitDouble( idtop, idpixelsUnit, randomTop1 );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc1071.putUnitDouble( idleft, idpixelsUnit, randomLeft1 );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc1071.putUnitDouble( idbottom, idpixelsUnit, randomBottom1  );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc1071.putUnitDouble( idright, idpixelsUnit, randomRight1);
    var idellipse = stringIDToTypeID( "ellipse" );
    desc1070.putObject( idto, idellipse, desc1071 );
executeAction( idset, desc1070, DialogModes.NO );

randomInc = (randomNumber(50, 500));
randomTop2 = (randomTop1 - randomInc)
randomLeft2 = (randomLeft1)
randomBottom2 = (randomBottom1- randomInc)
randomRight2 = (randomRight1)

// ===== Upper Mouth Selection ==========================
var idinterfaceWhite = stringIDToTypeID( "interfaceWhite" );
    var desc1072 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref290 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref290.putProperty( idchannel, idselection );
    desc1072.putReference( idnull, ref290 );
    var idto = stringIDToTypeID( "to" );
        var desc1073 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc1073.putUnitDouble( idtop, idpixelsUnit, randomTop2 );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc1073.putUnitDouble( idleft, idpixelsUnit, randomLeft2 );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc1073.putUnitDouble( idbottom, idpixelsUnit, randomBottom2 );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc1073.putUnitDouble( idright, idpixelsUnit, randomRight2 );
    var idellipse = stringIDToTypeID( "ellipse" );
    desc1072.putObject( idto, idellipse, desc1073 );
executeAction( idinterfaceWhite, desc1072, DialogModes.NO );


// ===== Radial Gradient Random  ===========================

var randomX1  = (randomNumber(0, 2550));
var randomX2  = (randomNumber(0, 2550));
var randomY1  = (randomNumber(0, 2550));
var randomY2  = (randomNumber(0, 2550));

var randomR1 = (randomNumber(0, 255));
var randomG1 = (randomNumber(0, 255));
var randomB1 = (randomNumber(0, 255));

var randomR2 = (randomNumber(0, 255));
var randomG2 = (randomNumber(0, 255));
var randomB2 = (randomNumber(0, 255));
var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    var desc690 = new ActionDescriptor();
    var idfrom = stringIDToTypeID( "from" );
        var desc691 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idhorizontal, idpixelsUnit, randomX1 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idvertical, idpixelsUnit, randomY1 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idfrom, idpaint, desc691 );
    var idto = stringIDToTypeID( "to" );
        var desc692 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idhorizontal, idpixelsUnit, randomX2 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idvertical, idpixelsUnit, randomY2 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idto, idpaint, desc692 );
    var idtype = stringIDToTypeID( "type" );
    var idgradientType = stringIDToTypeID( "gradientType" );
    var idradial = stringIDToTypeID( "radial" );
    desc690.putEnumerated( idtype, idgradientType, idradial );
    var iduseMask = stringIDToTypeID( "useMask" );
    desc690.putBoolean( iduseMask, true );
    var idgradient = stringIDToTypeID( "gradient" );
        var desc693 = new ActionDescriptor();
        var idname = stringIDToTypeID( "name" );
        desc693.putString( idname, """Violet, Orange""" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idcustomStops = stringIDToTypeID( "customStops" );
        desc693.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
        var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
        desc693.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
        var idcolors = stringIDToTypeID( "colors" );
            var list108 = new ActionList();
                var desc694 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc695 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc695.putDouble( idred, randomR1 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc695.putDouble( idgrain, randomG1 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc695.putDouble( idblue, randomB1 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc694.putObject( idcolor, idRGBColor, desc695 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc694.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc694.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc694.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc694 );
                var desc696 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc697 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc697.putDouble( idred, randomR2 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc697.putDouble( idgrain, randomG2 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc697.putDouble( idblue, randomB2 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc696.putObject( idcolor, idRGBColor, desc697 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc696.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc696.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc696.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc696 );
        desc693.putList( idcolors, list108 );
        var idtransparency = stringIDToTypeID( "transparency" );
            var list109 = new ActionList();
                var desc698 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc698.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc698.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc698.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc698 );
                var desc699 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc699.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc699.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc699.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc699 );
        desc693.putList( idtransparency, list109 );
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    desc690.putObject( idgradient, idgradientClassEvent, desc693 );
executeAction( idgradientClassEvent, desc690, DialogModes.NO );

var randomBor = (randomNumber (5, 30));
// ===== Select Border ==========================
var idborder = stringIDToTypeID( "border" );
    var desc1263 = new ActionDescriptor();
    var idwidth = stringIDToTypeID( "width" );
    var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
    desc1263.putUnitDouble( idwidth, idpixelsUnit, randomBor );
executeAction( idborder, desc1263, DialogModes.NO );

// ===== Make new layer =======================================
var idmake = stringIDToTypeID( "make" );
    var desc1264 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref423 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        ref423.putClass( idlayer );
    desc1264.putReference( idnull, ref423 );
    var idlayerID = stringIDToTypeID( "layerID" );
    desc1264.putInteger( idlayerID, 9 );
executeAction( idmake, desc1264, DialogModes.NO );


// ===== Radial Gradient Random  ===========================
var randomX1  = (randomNumber(0, 2550));
var randomX2  = (randomNumber(0, 2550));
var randomY1  = (randomNumber(0, 2550));
var randomY2  = (randomNumber(0, 2550));

var randomR1 = (randomNumber(0, 255));
var randomG1 = (randomNumber(0, 255));
var randomB1 = (randomNumber(0, 255));

var randomR2 = (randomNumber(0, 255));
var randomG2 = (randomNumber(0, 255));
var randomB2 = (randomNumber(0, 255));

var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    var desc690 = new ActionDescriptor();
    var idfrom = stringIDToTypeID( "from" );
        var desc691 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idhorizontal, idpixelsUnit, randomX1 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idvertical, idpixelsUnit, randomY1 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idfrom, idpaint, desc691 );
    var idto = stringIDToTypeID( "to" );
        var desc692 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idhorizontal, idpixelsUnit, randomX2 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idvertical, idpixelsUnit, randomY2 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idto, idpaint, desc692 );
    var idtype = stringIDToTypeID( "type" );
    var idgradientType = stringIDToTypeID( "gradientType" );
    var idradial = stringIDToTypeID( "radial" );
    desc690.putEnumerated( idtype, idgradientType, idradial );
    var iduseMask = stringIDToTypeID( "useMask" );
    desc690.putBoolean( iduseMask, true );
    var idgradient = stringIDToTypeID( "gradient" );
        var desc693 = new ActionDescriptor();
        var idname = stringIDToTypeID( "name" );
        desc693.putString( idname, """Violet, Orange""" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idcustomStops = stringIDToTypeID( "customStops" );
        desc693.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
        var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
        desc693.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
        var idcolors = stringIDToTypeID( "colors" );
            var list108 = new ActionList();
                var desc694 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc695 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc695.putDouble( idred, randomR1 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc695.putDouble( idgrain, randomG1 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc695.putDouble( idblue, randomB1 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc694.putObject( idcolor, idRGBColor, desc695 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc694.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc694.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc694.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc694 );
                var desc696 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc697 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc697.putDouble( idred, randomR2 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc697.putDouble( idgrain, randomG2 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc697.putDouble( idblue, randomB2 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc696.putObject( idcolor, idRGBColor, desc697 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc696.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc696.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc696.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc696 );
        desc693.putList( idcolors, list108 );
        var idtransparency = stringIDToTypeID( "transparency" );
            var list109 = new ActionList();
                var desc698 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc698.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc698.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc698.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc698 );
                var desc699 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc699.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc699.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc699.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc699 );
        desc693.putList( idtransparency, list109 );
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    desc690.putObject( idgradient, idgradientClassEvent, desc693 );
executeAction( idgradientClassEvent, desc690, DialogModes.NO );






// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc704 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc704, DialogModes.NO );

// ===== Deselect all =========================
var idset = stringIDToTypeID( "set" );
    var desc786 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref216 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref216.putProperty( idchannel, idselection );
    desc786.putReference( idnull, ref216 );
    var idto = stringIDToTypeID( "to" );
    var idordinal = stringIDToTypeID( "ordinal" );
    var idnone = stringIDToTypeID( "none" );
    desc786.putEnumerated( idto, idordinal, idnone );
executeAction( idset, desc786, DialogModes.NO );

// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc704 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc704, DialogModes.NO );

// ===== Deselect all =========================
var idset = stringIDToTypeID( "set" );
    var desc786 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref216 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref216.putProperty( idchannel, idselection );
    desc786.putReference( idnull, ref216 );
    var idto = stringIDToTypeID( "to" );
    var idordinal = stringIDToTypeID( "ordinal" );
    var idnone = stringIDToTypeID( "none" );
    desc786.putEnumerated( idto, idordinal, idnone );
executeAction( idset, desc786, DialogModes.NO );

}
if (mouthRandom == 2){

// ===== Make a New Layer ==========================
var idmake = stringIDToTypeID( "make" );
    var desc799 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref227 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        ref227.putClass( idlayer );
    desc799.putReference( idnull, ref227 );
    var idlayerID = stringIDToTypeID( "layerID" );
    desc799.putInteger( idlayerID, 2 );
executeAction( idmake, desc799, DialogModes.NO );

// ===== Rectangle Select  =================================
width = 2550;
height = 3300;
mouthHeight = randomNumber(125, 300);

randomTop1 = randomNumber(1300, 1900);
randomLeft1 = randomNumber(((width/2) - (width/4)),(width/3));
randomBottom1 = randomTop1 + mouthHeight;
randomRight1 = ((width/2) - randomLeft1) + (width/2);

var idset = stringIDToTypeID( "set" );
    var desc99 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref44 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref44.putProperty( idchannel, idselection );
    desc99.putReference( idnull, ref44 );
    var idto = stringIDToTypeID( "to" );
        var desc100 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc100.putUnitDouble( idtop, idpixelsUnit, randomTop1 );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc100.putUnitDouble( idleft, idpixelsUnit, randomLeft1 );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc100.putUnitDouble( idbottom, idpixelsUnit, randomBottom1 );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc100.putUnitDouble( idright, idpixelsUnit, randomRight1 );
    var idrectangle = stringIDToTypeID( "rectangle" );
    desc99.putObject( idto, idrectangle, desc100 );
executeAction( idset, desc99, DialogModes.NO ); 

// ===== Smooth Rectangle ==============
var idsmoothness = stringIDToTypeID( "smoothness" );
    var desc79 = new ActionDescriptor();
    var idradius = stringIDToTypeID( "radius" );
    var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
    desc79.putUnitDouble( idradius, idpixelsUnit, 50.000000 );
    var idselectionModifyEffectAtCanvasBounds = stringIDToTypeID( "selectionModifyEffectAtCanvasBounds" );
    desc79.putBoolean( idselectionModifyEffectAtCanvasBounds, false );
executeAction( idsmoothness, desc79, DialogModes.NO );

// ===== Radial Gradient Random  ===========================

var randomX1  = (randomNumber(0, 2550));
var randomX2  = (randomNumber(0, 2550));
var randomY1  = (randomNumber(0, 2550));
var randomY2  = (randomNumber(0, 2550));

var randomR1 = (randomNumber(0, 255));
var randomG1 = (randomNumber(0, 255));
var randomB1 = (randomNumber(0, 255));

var randomR2 = (randomNumber(0, 255));
var randomG2 = (randomNumber(0, 255));
var randomB2 = (randomNumber(0, 255));
var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    var desc690 = new ActionDescriptor();
    var idfrom = stringIDToTypeID( "from" );
        var desc691 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idhorizontal, idpixelsUnit, randomX1 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idvertical, idpixelsUnit, randomY1 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idfrom, idpaint, desc691 );
    var idto = stringIDToTypeID( "to" );
        var desc692 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idhorizontal, idpixelsUnit, randomX2 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idvertical, idpixelsUnit, randomY2 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idto, idpaint, desc692 );
    var idtype = stringIDToTypeID( "type" );
    var idgradientType = stringIDToTypeID( "gradientType" );
    var idradial = stringIDToTypeID( "radial" );
    desc690.putEnumerated( idtype, idgradientType, idradial );
    var iduseMask = stringIDToTypeID( "useMask" );
    desc690.putBoolean( iduseMask, true );
    var idgradient = stringIDToTypeID( "gradient" );
        var desc693 = new ActionDescriptor();
        var idname = stringIDToTypeID( "name" );
        desc693.putString( idname, """Violet, Orange""" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idcustomStops = stringIDToTypeID( "customStops" );
        desc693.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
        var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
        desc693.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
        var idcolors = stringIDToTypeID( "colors" );
            var list108 = new ActionList();
                var desc694 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc695 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc695.putDouble( idred, randomR1 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc695.putDouble( idgrain, randomG1 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc695.putDouble( idblue, randomB1 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc694.putObject( idcolor, idRGBColor, desc695 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc694.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc694.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc694.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc694 );
                var desc696 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc697 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc697.putDouble( idred, randomR2 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc697.putDouble( idgrain, randomG2 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc697.putDouble( idblue, randomB2 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc696.putObject( idcolor, idRGBColor, desc697 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc696.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc696.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc696.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc696 );
        desc693.putList( idcolors, list108 );
        var idtransparency = stringIDToTypeID( "transparency" );
            var list109 = new ActionList();
                var desc698 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc698.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc698.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc698.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc698 );
                var desc699 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc699.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc699.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc699.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc699 );
        desc693.putList( idtransparency, list109 );
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    desc690.putObject( idgradient, idgradientClassEvent, desc693 );
executeAction( idgradientClassEvent, desc690, DialogModes.NO );

// ===== Wave Filter (1/2 Chance) ====================================
var waveChance = randomNumber(1,2);
if (waveChance == 1){
    var idwave = stringIDToTypeID( "wave" );
        var desc1150 = new ActionDescriptor();
        var idwaveType = stringIDToTypeID( "waveType" );
        var idwaveType = stringIDToTypeID( "waveType" );
        var idwaveSine = stringIDToTypeID( "waveSine" );
        desc1150.putEnumerated( idwaveType, idwaveType, idwaveSine );
        var idnumberOfGenerators = stringIDToTypeID( "numberOfGenerators" );
        desc1150.putInteger( idnumberOfGenerators, 2 );
        var idwavelengthMin = stringIDToTypeID( "wavelengthMin" );
        desc1150.putInteger( idwavelengthMin, 694 );
        var idwavelengthMax = stringIDToTypeID( "wavelengthMax" );
        desc1150.putInteger( idwavelengthMax, 999 );
        var idamplitudeMin = stringIDToTypeID( "amplitudeMin" );
        desc1150.putInteger( idamplitudeMin, 1 );
        var idamplitudeMax = stringIDToTypeID( "amplitudeMax" );
        desc1150.putInteger( idamplitudeMax, 749 );
        var idscaleHorizontal = stringIDToTypeID( "scaleHorizontal" );
        desc1150.putInteger( idscaleHorizontal, 100 );
        var idscaleVertical = stringIDToTypeID( "scaleVertical" );
        desc1150.putInteger( idscaleVertical, 100 );
        var idundefinedArea = stringIDToTypeID( "undefinedArea" );
        var idundefinedArea = stringIDToTypeID( "undefinedArea" );
        var idrepeatEdgePixels = stringIDToTypeID( "repeatEdgePixels" );
        desc1150.putEnumerated( idundefinedArea, idundefinedArea, idrepeatEdgePixels );
        var idrandomSeed = stringIDToTypeID( "randomSeed" );
        desc1150.putInteger( idrandomSeed, 13148940 );
    executeAction( idwave, desc1150, DialogModes.NO );
}

var randomBor = (randomNumber (5, 30));
// ===== Select Border ==========================
var idborder = stringIDToTypeID( "border" );
    var desc1263 = new ActionDescriptor();
    var idwidth = stringIDToTypeID( "width" );
    var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
    desc1263.putUnitDouble( idwidth, idpixelsUnit, randomBor );
executeAction( idborder, desc1263, DialogModes.NO );

// ===== Make new layer =======================================
var idmake = stringIDToTypeID( "make" );
    var desc1264 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref423 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        ref423.putClass( idlayer );
    desc1264.putReference( idnull, ref423 );
    var idlayerID = stringIDToTypeID( "layerID" );
    desc1264.putInteger( idlayerID, 9 );
executeAction( idmake, desc1264, DialogModes.NO );


// ===== Radial Gradient Random  ===========================
var randomX1  = (randomNumber(0, 2550));
var randomX2  = (randomNumber(0, 2550));
var randomY1  = (randomNumber(0, 2550));
var randomY2  = (randomNumber(0, 2550));

var randomR1 = (randomNumber(0, 255));
var randomG1 = (randomNumber(0, 255));
var randomB1 = (randomNumber(0, 255));

var randomR2 = (randomNumber(0, 255));
var randomG2 = (randomNumber(0, 255));
var randomB2 = (randomNumber(0, 255));

var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    var desc690 = new ActionDescriptor();
    var idfrom = stringIDToTypeID( "from" );
        var desc691 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idhorizontal, idpixelsUnit, randomX1 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc691.putUnitDouble( idvertical, idpixelsUnit, randomY1 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idfrom, idpaint, desc691 );
    var idto = stringIDToTypeID( "to" );
        var desc692 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idhorizontal, idpixelsUnit, randomX2 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc692.putUnitDouble( idvertical, idpixelsUnit, randomY2 );
    var idpaint = stringIDToTypeID( "paint" );
    desc690.putObject( idto, idpaint, desc692 );
    var idtype = stringIDToTypeID( "type" );
    var idgradientType = stringIDToTypeID( "gradientType" );
    var idradial = stringIDToTypeID( "radial" );
    desc690.putEnumerated( idtype, idgradientType, idradial );
    var iduseMask = stringIDToTypeID( "useMask" );
    desc690.putBoolean( iduseMask, true );
    var idgradient = stringIDToTypeID( "gradient" );
        var desc693 = new ActionDescriptor();
        var idname = stringIDToTypeID( "name" );
        desc693.putString( idname, """Violet, Orange""" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idgradientForm = stringIDToTypeID( "gradientForm" );
        var idcustomStops = stringIDToTypeID( "customStops" );
        desc693.putEnumerated( idgradientForm, idgradientForm, idcustomStops );
        var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
        desc693.putDouble( idinterfaceIconFrameDimmed, 4096.000000 );
        var idcolors = stringIDToTypeID( "colors" );
            var list108 = new ActionList();
                var desc694 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc695 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc695.putDouble( idred, randomR1 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc695.putDouble( idgrain, randomG1 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc695.putDouble( idblue, randomB1 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc694.putObject( idcolor, idRGBColor, desc695 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc694.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc694.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc694.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc694 );
                var desc696 = new ActionDescriptor();
                var idcolor = stringIDToTypeID( "color" );
                    var desc697 = new ActionDescriptor();
                    var idred = stringIDToTypeID( "red" );
                    desc697.putDouble( idred, randomR2 );
                    var idgrain = stringIDToTypeID( "grain" );
                    desc697.putDouble( idgrain, randomG2 );
                    var idblue = stringIDToTypeID( "blue" );
                    desc697.putDouble( idblue, randomB2 );
                var idRGBColor = stringIDToTypeID( "RGBColor" );
                desc696.putObject( idcolor, idRGBColor, desc697 );
                var idtype = stringIDToTypeID( "type" );
                var idcolorStopType = stringIDToTypeID( "colorStopType" );
                var iduserStop = stringIDToTypeID( "userStop" );
                desc696.putEnumerated( idtype, idcolorStopType, iduserStop );
                var idlocation = stringIDToTypeID( "location" );
                desc696.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc696.putInteger( idmidpoint, 50 );
            var idcolorStop = stringIDToTypeID( "colorStop" );
            list108.putObject( idcolorStop, desc696 );
        desc693.putList( idcolors, list108 );
        var idtransparency = stringIDToTypeID( "transparency" );
            var list109 = new ActionList();
                var desc698 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc698.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc698.putInteger( idlocation, 0 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc698.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc698 );
                var desc699 = new ActionDescriptor();
                var idopacity = stringIDToTypeID( "opacity" );
                var idpercentUnit = stringIDToTypeID( "percentUnit" );
                desc699.putUnitDouble( idopacity, idpercentUnit, 100.000000 );
                var idlocation = stringIDToTypeID( "location" );
                desc699.putInteger( idlocation, 4096 );
                var idmidpoint = stringIDToTypeID( "midpoint" );
                desc699.putInteger( idmidpoint, 50 );
            var idtransferSpec = stringIDToTypeID( "transferSpec" );
            list109.putObject( idtransferSpec, desc699 );
        desc693.putList( idtransparency, list109 );
    var idgradientClassEvent = stringIDToTypeID( "gradientClassEvent" );
    desc690.putObject( idgradient, idgradientClassEvent, desc693 );
executeAction( idgradientClassEvent, desc690, DialogModes.NO );

// ===== Deselect all =========================
var idset = stringIDToTypeID( "set" );
    var desc786 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref216 = new ActionReference();
        var idchannel = stringIDToTypeID( "channel" );
        var idselection = stringIDToTypeID( "selection" );
        ref216.putProperty( idchannel, idselection );
    desc786.putReference( idnull, ref216 );
    var idto = stringIDToTypeID( "to" );
    var idordinal = stringIDToTypeID( "ordinal" );
    var idnone = stringIDToTypeID( "none" );
    desc786.putEnumerated( idto, idordinal, idnone );
executeAction( idset, desc786, DialogModes.NO );

// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc704 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc704, DialogModes.NO );



// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc704 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc704, DialogModes.NO );
}

if (bodyRandom == 1){
// ====== scaleHead01.js =====================

var scalePercent = randomNumber(80, 90)

// ======= Scale Head ========================
var idtransform = stringIDToTypeID( "transform" );
    var desc138 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref67 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref67.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc138.putReference( idnull, ref67 );
    var idfreeTransformCenterState = stringIDToTypeID( "freeTransformCenterState" );
    var idquadCenterState = stringIDToTypeID( "quadCenterState" );
    var idQCSAverage = stringIDToTypeID( "QCSAverage" );
    desc138.putEnumerated( idfreeTransformCenterState, idquadCenterState, idQCSAverage );
    var idoffset = stringIDToTypeID( "offset" );
        var desc139 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc139.putUnitDouble( idhorizontal, idpixelsUnit, 0.000000 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc139.putUnitDouble( idvertical, idpixelsUnit, 0.000000 );
    var idoffset = stringIDToTypeID( "offset" );
    desc138.putObject( idoffset, idoffset, desc139 );
    var idwidth = stringIDToTypeID( "width" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc138.putUnitDouble( idwidth, idpercentUnit, scalePercent );
    var idheight = stringIDToTypeID( "height" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc138.putUnitDouble( idheight, idpercentUnit, scalePercent );
    var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
    var idinterpolationType = stringIDToTypeID( "interpolationType" );
    var idbicubic = stringIDToTypeID( "bicubic" );
    desc138.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubic );
executeAction( idtransform, desc138, DialogModes.NO );

}
if (bodyRandom != 1){
var scalePercent = randomNumber(70, 80)

// ======= Scale Head ========================
var idtransform = stringIDToTypeID( "transform" );
    var desc138 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref67 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref67.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc138.putReference( idnull, ref67 );
    var idfreeTransformCenterState = stringIDToTypeID( "freeTransformCenterState" );
    var idquadCenterState = stringIDToTypeID( "quadCenterState" );
    var idQCSAverage = stringIDToTypeID( "QCSAverage" );
    desc138.putEnumerated( idfreeTransformCenterState, idquadCenterState, idQCSAverage );
    var idoffset = stringIDToTypeID( "offset" );
        var desc139 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc139.putUnitDouble( idhorizontal, idpixelsUnit, 0.000000 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc139.putUnitDouble( idvertical, idpixelsUnit, 0.000000 );
    var idoffset = stringIDToTypeID( "offset" );
    desc138.putObject( idoffset, idoffset, desc139 );
    var idwidth = stringIDToTypeID( "width" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc138.putUnitDouble( idwidth, idpercentUnit, scalePercent );
    var idheight = stringIDToTypeID( "height" );
    var idpercentUnit = stringIDToTypeID( "percentUnit" );
    desc138.putUnitDouble( idheight, idpercentUnit, scalePercent );
    var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
    var idinterpolationType = stringIDToTypeID( "interpolationType" );
    var idbicubic = stringIDToTypeID( "bicubic" );
    desc138.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubic );
executeAction( idtransform, desc138, DialogModes.NO );
}

// =======================================================
var idflattenImage = stringIDToTypeID( "flattenImage" );
executeAction( idflattenImage, undefined, DialogModes.NO );

// =======================================================
var iddustAndScratches = stringIDToTypeID( "dustAndScratches" );
    var desc17 = new ActionDescriptor();
    var idradius = stringIDToTypeID( "radius" );
    desc17.putInteger( idradius, 15 );
    var idthreshold = stringIDToTypeID( "threshold" );
    desc17.putInteger( idthreshold, 3 );
executeAction( iddustAndScratches, desc17, DialogModes.NO );

// =======================================================
var idcopyToLayer = stringIDToTypeID( "copyToLayer" );
executeAction( idcopyToLayer, undefined, DialogModes.NO );

// =======================================================
var idlevels = stringIDToTypeID( "levels" );
    var desc30 = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID( "presetKind" );
    var idpresetKindType = stringIDToTypeID( "presetKindType" );
    var idpresetKindCustom = stringIDToTypeID( "presetKindCustom" );
    desc30.putEnumerated( idpresetKind, idpresetKindType, idpresetKindCustom );
    var idadjustment = stringIDToTypeID( "adjustment" );
        var list5 = new ActionList();
            var desc31 = new ActionDescriptor();
            var idchannel = stringIDToTypeID( "channel" );
                var ref23 = new ActionReference();
                var idchannel = stringIDToTypeID( "channel" );
                var idchannel = stringIDToTypeID( "channel" );
                var idcomposite = stringIDToTypeID( "composite" );
                ref23.putEnumerated( idchannel, idchannel, idcomposite );
            desc31.putReference( idchannel, ref23 );
            var idinput = stringIDToTypeID( "input" );
                var list6 = new ActionList();
                list6.putInteger( 142 );
                list6.putInteger( 144 );
            desc31.putList( idinput, list6 );
        var idlevelsAdjustment = stringIDToTypeID( "levelsAdjustment" );
        list5.putObject( idlevelsAdjustment, desc31 );
    desc30.putList( idadjustment, list5 );
executeAction( idlevels, desc30, DialogModes.NO );

// =======================================================
var idset = stringIDToTypeID( "set" );
    var desc49 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref38 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref38.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc49.putReference( idnull, ref38 );
    var idto = stringIDToTypeID( "to" );
        var desc50 = new ActionDescriptor();
        var idmode = stringIDToTypeID( "mode" );
        var idblendMode = stringIDToTypeID( "blendMode" );
        var iddarkerColor = stringIDToTypeID( "darkerColor" );
        desc50.putEnumerated( idmode, idblendMode, iddarkerColor );
    var idlayer = stringIDToTypeID( "layer" );
    desc49.putObject( idto, idlayer, desc50 );
executeAction( idset, desc49, DialogModes.NO );


// =======================================================
var idmergeVisible = stringIDToTypeID( "mergeVisible" );
    var desc46 = new ActionDescriptor();
    var idduplicate = stringIDToTypeID( "duplicate" );
    desc46.putBoolean( idduplicate, true );
executeAction( idmergeVisible, desc46, DialogModes.NO );

// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc107 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc107, DialogModes.NO );

// =======================================================
var idset = stringIDToTypeID( "set" );
    var desc108 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref93 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref93.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc108.putReference( idnull, ref93 );
    var idto = stringIDToTypeID( "to" );
        var desc109 = new ActionDescriptor();
        var idmode = stringIDToTypeID( "mode" );
        var idblendMode = stringIDToTypeID( "blendMode" );
        var idoverlay = stringIDToTypeID( "overlay" );
        desc109.putEnumerated( idmode, idblendMode, idoverlay );
    var idlayer = stringIDToTypeID( "layer" );
    desc108.putObject( idto, idlayer, desc109 );
executeAction( idset, desc108, DialogModes.NO );

// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc122 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc122, DialogModes.NO );

// =======================================================
var iddustAndScratches = stringIDToTypeID( "dustAndScratches" );
    var desc17 = new ActionDescriptor();
    var idradius = stringIDToTypeID( "radius" );
    desc17.putInteger( idradius, 15 );
    var idthreshold = stringIDToTypeID( "threshold" );
    desc17.putInteger( idthreshold, 3 );
executeAction( iddustAndScratches, desc17, DialogModes.NO );

// =======================================================
var idcopyToLayer = stringIDToTypeID( "copyToLayer" );
executeAction( idcopyToLayer, undefined, DialogModes.NO );

// =======================================================
var idlevels = stringIDToTypeID( "levels" );
    var desc30 = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID( "presetKind" );
    var idpresetKindType = stringIDToTypeID( "presetKindType" );
    var idpresetKindCustom = stringIDToTypeID( "presetKindCustom" );
    desc30.putEnumerated( idpresetKind, idpresetKindType, idpresetKindCustom );
    var idadjustment = stringIDToTypeID( "adjustment" );
        var list5 = new ActionList();
            var desc31 = new ActionDescriptor();
            var idchannel = stringIDToTypeID( "channel" );
                var ref23 = new ActionReference();
                var idchannel = stringIDToTypeID( "channel" );
                var idchannel = stringIDToTypeID( "channel" );
                var idcomposite = stringIDToTypeID( "composite" );
                ref23.putEnumerated( idchannel, idchannel, idcomposite );
            desc31.putReference( idchannel, ref23 );
            var idinput = stringIDToTypeID( "input" );
                var list6 = new ActionList();
                list6.putInteger( 142 );
                list6.putInteger( 144 );
            desc31.putList( idinput, list6 );
        var idlevelsAdjustment = stringIDToTypeID( "levelsAdjustment" );
        list5.putObject( idlevelsAdjustment, desc31 );
    desc30.putList( idadjustment, list5 );
executeAction( idlevels, desc30, DialogModes.NO );

// =======================================================
var idset = stringIDToTypeID( "set" );
    var desc49 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref38 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref38.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc49.putReference( idnull, ref38 );
    var idto = stringIDToTypeID( "to" );
        var desc50 = new ActionDescriptor();
        var idmode = stringIDToTypeID( "mode" );
        var idblendMode = stringIDToTypeID( "blendMode" );
        var iddarkerColor = stringIDToTypeID( "darkerColor" );
        desc50.putEnumerated( idmode, idblendMode, iddarkerColor );
    var idlayer = stringIDToTypeID( "layer" );
    desc49.putObject( idto, idlayer, desc50 );
executeAction( idset, desc49, DialogModes.NO );


// =======================================================
var idmergeVisible = stringIDToTypeID( "mergeVisible" );
    var desc46 = new ActionDescriptor();
    var idduplicate = stringIDToTypeID( "duplicate" );
    desc46.putBoolean( idduplicate, true );
executeAction( idmergeVisible, desc46, DialogModes.NO );

// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc107 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc107, DialogModes.NO );

// =======================================================
var idset = stringIDToTypeID( "set" );
    var desc108 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref93 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref93.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc108.putReference( idnull, ref93 );
    var idto = stringIDToTypeID( "to" );
        var desc109 = new ActionDescriptor();
        var idmode = stringIDToTypeID( "mode" );
        var idblendMode = stringIDToTypeID( "blendMode" );
        var idoverlay = stringIDToTypeID( "overlay" );
        desc109.putEnumerated( idmode, idblendMode, idoverlay );
    var idlayer = stringIDToTypeID( "layer" );
    desc108.putObject( idto, idlayer, desc109 );
executeAction( idset, desc108, DialogModes.NO );

// =======================================================
var idmergeLayersNew = stringIDToTypeID( "mergeLayersNew" );
    var desc122 = new ActionDescriptor();
executeAction( idmergeLayersNew, desc122, DialogModes.NO );

// =======================================================
var idinvert = stringIDToTypeID( "invert" );
executeAction( idinvert, undefined, DialogModes.NO );

var rHue = randomNumber(-180, 180)

// =======================================================
var idhueSaturation = stringIDToTypeID( "hueSaturation" );
    var desc189 = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID( "presetKind" );
    var idpresetKindType = stringIDToTypeID( "presetKindType" );
    var idpresetKindCustom = stringIDToTypeID( "presetKindCustom" );
    desc189.putEnumerated( idpresetKind, idpresetKindType, idpresetKindCustom );
    var idcolorize = stringIDToTypeID( "colorize" );
    desc189.putBoolean( idcolorize, false );
    var idadjustment = stringIDToTypeID( "adjustment" );
        var list6 = new ActionList();
            var desc190 = new ActionDescriptor();
            var idhue = stringIDToTypeID( "hue" );
            desc190.putInteger( idhue, rHue );
            var idsaturation = stringIDToTypeID( "saturation" );
            desc190.putInteger( idsaturation, 0 );
            var idlightness = stringIDToTypeID( "lightness" );
            desc190.putInteger( idlightness, 0 );
        var idhueSatAdjustmentVtwo = stringIDToTypeID( "hueSatAdjustmentV2" );
        list6.putObject( idhueSatAdjustmentVtwo, desc190 );
    desc189.putList( idadjustment, list6 );
executeAction( idhueSaturation, desc189, DialogModes.NO );

// =======================================================
var idcrop = stringIDToTypeID( "crop" );
    var desc47 = new ActionDescriptor();
    var idto = stringIDToTypeID( "to" );
        var desc48 = new ActionDescriptor();
        var idtop = stringIDToTypeID( "top" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc48.putUnitDouble( idtop, idpixelsUnit, 0.000000 );
        var idleft = stringIDToTypeID( "left" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc48.putUnitDouble( idleft, idpixelsUnit, 0.000000 );
        var idbottom = stringIDToTypeID( "bottom" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc48.putUnitDouble( idbottom, idpixelsUnit, 2540.000000 );
        var idright = stringIDToTypeID( "right" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc48.putUnitDouble( idright, idpixelsUnit, 2540.000000 );
    var idrectangle = stringIDToTypeID( "rectangle" );
    desc47.putObject( idto, idrectangle, desc48 );
    var idangle = stringIDToTypeID( "angle" );
    var idangleUnit = stringIDToTypeID( "angleUnit" );
    desc47.putUnitDouble( idangle, idangleUnit, 0.000000 );
    var iddelete = stringIDToTypeID( "delete" );
    desc47.putBoolean( iddelete, true );
    var idcropAspectRatioModeKey = stringIDToTypeID( "cropAspectRatioModeKey" );
    var idcropAspectRatioModeClass = stringIDToTypeID( "cropAspectRatioModeClass" );
    var idpureAspectRatio = stringIDToTypeID( "pureAspectRatio" );
    desc47.putEnumerated( idcropAspectRatioModeKey, idcropAspectRatioModeClass, idpureAspectRatio );
    var idconstrainProportions = stringIDToTypeID( "constrainProportions" );
    desc47.putBoolean( idconstrainProportions, true );
executeAction( idcrop, desc47, DialogModes.NO );

/*
          __________     __________
         /          \   /          \
        /            \ /            \
        |        @@  | |   /\       |
       /\        @@  / \            /\   
      /  \ _________/   \__________/  \
     /                                 \
    (    O                         O    )
     \    \_                     _/    /
       \_   ---------------------   _/
         ----___________________---- __-->
        /   / =  =  |\ /| =  =  =\       >
      /    /  =  =  |/ \| =  =  = \ __-- >
    /     /=  =  =  =  =  =  =  =  \
*/
