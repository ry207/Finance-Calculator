
function get_values(){
    event.preventDefault();

    var homevalue = document.getElementById("homevalue").value;
    var downpayment = document.getElementById("downpayment").value;
    var interestrate = document.getElementById("interestrate").value;
    var loan_term = document.getElementById("loan_term").value;

    //console.log(homevalue)

    //console.log(downpayment)
    
    //console.log(interestrate)

    //console.log(loan_term);

    calculate_monthly(homevalue, downpayment, interestrate, loan_term);
}
function calculate_monthly(homevalue, downpayment, interestrate, loan_term){
    var p = homevalue-downpayment;
    var n = loan_term * 12;
    var i = interestrate / 100 / 12;

    var m = p * ((i * (1 + i) ** n) / ((1 + i) ** n - 1));

    //console.log(m.toLocaleString("en-US", { style: "currency", currency: "USD" }));

    let m_formatted = m.toLocaleString("en-US", { style: "currency", currency: "USD" });

    document.getElementById("monthly_text").innerText = ("Monthly Payment: " + m_formatted);

}
