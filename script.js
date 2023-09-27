function split() {
    var start_date = new Date(document.getElementById('start_date').value);
    var end_date = new Date(document.getElementById('end_date').value);
    var days = (end_date.getTime() / 86400000) - (start_date.getTime() / 86400000);
    document.getElementById('days').innerText = days;

    var amount = document.getElementById('amount').value;
    var answer = document.getElementById('answer').innerText = amount / days;

    var p1_start_date = new Date(document.getElementById('p1_start_date').value);
    var p1_end_date = new Date(document.getElementById('p1_end_date').value);
    var p1_days = (p1_end_date.getTime() / 86400000) - (p1_start_date.getTime() / 86400000);
    var p1_answer = (p1_days * answer).toFixed(2)
    document.getElementById('p1_amount').innerText = '$ ' + p1_answer;

    var p2_start_date = new Date(document.getElementById('p2_start_date').value);
    var p2_end_date = new Date(document.getElementById('p2_end_date').value);
    var p2_days = (p2_end_date.getTime() / 86400000) - (p2_start_date.getTime() / 86400000) + 1;
    var p2_answer = (p2_days * answer).toFixed(2)
    document.getElementById('p2_amount').innerText = '$ ' + p2_answer;

    var p3_start_date = new Date(document.getElementById('p3_start_date').value);
    var p3_end_date = new Date(document.getElementById('p3_end_date').value);
    var p3_days = (p3_end_date.getTime() / 86400000) - (p3_start_date.getTime() / 86400000) + 1;
    var p3_answer = (p3_days * answer).toFixed(2)
    document.getElementById('p3_amount').innerText = '$ ' + p3_answer;

    var p4_start_date = new Date(document.getElementById('p4_start_date').value);
    var p4_end_date = new Date(document.getElementById('p4_end_date').value);
    var p4_days = (p4_end_date.getTime() / 86400000) - (p4_start_date.getTime() / 86400000) + 1;
    var p4_answer = (p4_days * answer).toFixed(2)
    document.getElementById('p4_amount').innerText = '$ ' + p4_answer;
}