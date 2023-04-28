const password = document.getElementById('password')
const username = document.getElementById('username')

document.getElementById('form').addEventListener('submit', (event) =>{
    event.preventDefault()
    valid = true

    const password = password_Value
    const username = username_Value

    if(username_Value.lenghth < 5 || password_Value.lenghth < 12) {
        alert('The Form Has Not Been Submitted : \n - A Field is not valid.')
        valid = false
    }

    if(valid)
    alert('The Form Has Been Completed. \n We Will Proceed With The Sending..')
})