var musicNote = 1;
var digitalPic = 1;
var liveMusicPic = 1;
var salesPic = 1;
var recordStore = 1;
var musicIns = 1;
var recordingPic = 1;
var musicCompare = 1;
var musicFlat = 1;
$(document).ready(function() {
    $('#musicNote').click(function() {
        if (musicNote === 1) {
            $('#musicNote').attr('src', 'http://www.clipartbest.com/cliparts/dc7/oyB/dc7oyBKGi.jpeg');
            musicNote += 1;
        }
        else if (musicNote === 2) {
            $('#musicNote').attr('src', 'http://simpleicon.com/wp-content/uploads/music-note-1.png');
            musicNote -= 1;
        }
    });
    $('#digital').click(function() {
        if (digitalPic === 1) {
            $('#digital').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Paramore_Concert.jpg');
            digitalPic += 1;
        }
        else if (digitalPic === 2) {
            $('#digital').attr('src', 'http://www.thebestearbuds.com/wp-content/uploads/2014/06/earbuds.jpg');
            digitalPic -= 1;
        }
    });
    $('#liveMusic').click(function() {
        if (liveMusicPic === 1) {
            $('#liveMusic').attr('src', 'http://images.medicaldaily.com/sites/medicaldaily.com/files/2014/03/11/listening-music_0.jpg');
            liveMusicPic += 1;
        }
        else if (liveMusicPic === 2) {
            $('#liveMusic').attr('src', 'http://i.ytimg.com/vi/g38vGXp84mI/maxresdefault.jpg');
            liveMusicPic -= 1;
        }
    });
    $('#salesPic').click(function() {
        if (salesPic === 1) {
            $('#salesPic').attr('src', 'http://quadrocreative.com/wp-content/uploads/2013/08/Sales-Chart.jpg');
            salesPic += 1;
        }
        else if (salesPic === 2) {
            $('#salesPic').attr('src', 'http://cdn.camyx.com/wp-content/uploads/2014/06/camera-sales-decrease-q1-2014.jpg');
            salesPic -= 1;
        }
    });
    $('#recordStore').click(function() {
        if (recordStore === 1) {
            $('#recordStore').attr('src', 'http://www.macobserver.com/imgs/teaser_images/20150630itunes_12_2_icon.jpg');
            recordStore += 1;
        }
        else if (recordStore === 2) {
            $('#recordStore').attr('src', 'http://www.loyolaphoenix.com/wp-content/uploads/2013/11/daves2.jpg');
            recordStore -= 1;
        }
    });
    $('#musicIns').click(function() {
        if (musicIns === 1) {
            $('#musicIns').attr('src', 'http://www.steinway.com/images/piano-model/GP215EP.png');
            musicIns += 1;
        }
        else if (musicIns === 2) {
            $('#musicIns').attr('src', 'http://pngimg.com/upload/guitar_PNG3352.png');
            musicIns -= 1;
        }
    });
    $('#recordingPic').click(function() {
        if (recordingPic === 1) {
            $('#recordingPic').attr('src', 'http://www.sunlandrvresorts.com/wp-content/uploads/2013/09/bigstock-silhouettes-of-concert-crowd-i-15652625_mini.jpg');
            recordingPic += 1;
        }
        else if (recordingPic === 2) {
            $('#recordingPic').attr('src', 'http://www.5thstreetstudios.com/uploads/2/8/2/7/2827927/9432441_orig.jpg?423');
            recordingPic -= 1;
        }
    });
    $('#musicCompare').click(function() {
        if (musicCompare === 1) {
            $('#musicCompare').attr('src', 'http://news.preisgenau.de/wp-content/uploads/2010/07/apple_ipd.jpg');
            musicCompare += 1;
        }
        else if (musicCompare === 2) {
            $('#musicCompare').attr('src', 'http://www.yeoldewishinshoppe.com/images/tape1.jpg');
            musicCompare -= 1;
        }
    });
    $('#musicFlat').click(function() {
        if (musicFlat === 1) {
            $('#musicFlat').attr('src', 'http://www.clipartsfree.net/vector/large/music_flat_Vector_Clipart.png');
            musicFlat += 1;
        }
        else if (musicFlat === 2) {
            $('#musicFlat').attr('src', 'http://images.all-free-download.com/images/graphiclarge/whole_note_144266.jpg');
            musicFlat -= 1;
        }
    });
})