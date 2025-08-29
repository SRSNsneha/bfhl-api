const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const name = "s_r_sneha";
const dob = "06042004";
const email = "srsneha2004@gmail.com";
const roll = "22BCE1279";


app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
    try {
        const d = req.body.data;
        if (!Array.isArray(d)) return res.status(400).json({ is_success: false });

        let e = [], o = [], a = [], sp = [], s = 0, st = "";
        d.forEach(i => {
            if (!isNaN(i)) {
                let n = parseInt(i);
                n % 2 === 0 ? e.push(i) : o.push(i);
                s += n;
            } else if (/^[a-zA-Z]+$/.test(i)) {
                a.push(i.toUpperCase());
                st += i;
            } else sp.push(i);
        });

        let alt = st.split("").reverse().map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join("");

        res.json({
            is_success: true,
            user_id: `${name}_${dob}`,
            email: email,
            roll_number: roll,
            odd_numbers: o,
            even_numbers: e,
            alphabets: a,
            special_characters: sp,
            sum: s.toString(),
            concat_string: alt
        });

    } catch (err) {
        res.status(500).json({ is_success: false });
    }
});

app.listen(3000, () => console.log("Running..."));
