import React from 'react'


const jobgraphicdesigner = () => {
    return (
        <>

            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card">
                        {/* <ul class="nav nav-tabs2">
                            <h5>Software Developer (WordPress) (Lahore)</h5>

                        </ul> */}
                        <div className="container">
                            <div class="tab-content">
                                <div class="tab-pane  show active" id="e_add">
                                    <div class="body">
                                        <form method="POST" action="https://hrm.devbunch.com/apply" autocomplete="off" enctype="multipart/form-data">
                                            <input type="hidden" name="_token" value="WAQctf3vWKyEPWXMH2cQI04YWH0QPPLHBrGHY9Vm" />
                                            <input type="hidden" name="job_id" value="4" />
                                            <input type="hidden" name="candidate_status" value="Not Evaluated Yet" />
                                            <input type="hidden" value="no" name="others" />
                                            <input type="hidden" value="null" name="job_name" />
                                            <input type="hidden" value="null" name="job_change" />
                                            <input type="hidden" value="null" name="job_change_at" />
                                            <div class="row clearfix">
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <label class="text-label">Full Name*</label>
                                                        <input type="text" name="name" id="name" class="form-control" value="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <label class="text-label">Email*</label>
                                                        <input type="email" name="email" id="email" class="form-control" value="" onchange="validateEmail()" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <label class="text-label">Mobile No*</label>
                                                        <input type="text" name="mobile" id="mobile" class="form-control" value="" onchange="validateMobile()" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <label class="text-label">CNIC* (Without Dashes)</label>
                                                        <input type="text" name="cnic" id="cnic" class="form-control" value="" onchange="validateCNIC()" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <label class="text-label">Current City*</label>
                                                        <select class="form-control default-select" id="city" tabindex="-98" name="city">
                                                            <option value="">Select City</option>
                                                            <option value="Ahmadpur Sial">Ahmadpur Sial</option>
                                                            <option value="Ahmedpur East">Ahmedpur East</option>
                                                            <option value="Alipur Chatha">Alipur Chatha</option>
                                                            <option value="Arifwala">Arifwala</option>
                                                            <option value="Attock Tehsil">Attock Tehsil</option>
                                                            <option value="Baddomalhi">Baddomalhi</option>
                                                            <option value="Bahawalnagar">Bahawalnagar</option>
                                                            <option value="Bahawalpur">Bahawalpur</option>
                                                            <option value="Bakhri Ahmad Khan">Bakhri Ahmad Khan</option>
                                                            <option value="Basirpur">Basirpur</option>
                                                            <option value="Basti Dosa">Basti Dosa</option>
                                                            <option value="Begowala">Begowala</option>
                                                            <option value="Bhakkar">Bhakkar</option>
                                                            <option value="Bhalwal">Bhalwal</option>
                                                            <option value="Bhawana">Bhawana</option>
                                                            <option value="Bhera">Bhera</option>
                                                            <option value="Bhopalwala">Bhopalwala</option>
                                                            <option value="Burewala">Burewala</option>
                                                            <option value="Chak Azam Saffo">Chak Azam Saffo</option>
                                                            <option value="Chak Jhumra">Chak Jhumra</option>
                                                            <option value="Chak One Hundred Twenty Nine Left">Chak One Hundred
                                                                Twenty Nine Left</option>
                                                            <option value="Chak Thirty-one -Eleven Left">Chak Thirty-one -Eleven
                                                                Left</option>
                                                            <option value="Chak Two Hundred Forty-Nine TDA">Chak Two Hundred
                                                                Forty-Nine TDA</option>
                                                            <option value="Chakwal">Chakwal</option>
                                                            <option value="Chawinda">Chawinda</option>
                                                            <option value="Chichawatni">Chichawatni</option>
                                                            <option value="Chiniot">Chiniot</option>
                                                            <option value="Chishtian">Chishtian</option>
                                                            <option value="Choa Saidanshah">Choa Saidanshah</option>
                                                            <option value="Chuhar Kana">Chuhar Kana</option>
                                                            <option value="Chunian">Chunian</option>
                                                            <option value="Daira Din Panah">Daira Din Panah</option>
                                                            <option value="Dajal">Dajal</option>
                                                            <option value="Dandot RS">Dandot RS</option>
                                                            <option value="Darya Khan">Darya Khan</option>
                                                            <option value="Daska">Daska</option>
                                                            <option value="Daud Khel">Daud Khel</option>
                                                            <option value="Daultala">Daultala</option>
                                                            <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                                                            <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                                                            <option value="Dhanot">Dhanot</option>
                                                            <option value="Dhaunkal">Dhaunkal</option>
                                                            <option value="Dhok Awan">Dhok Awan</option>
                                                            <option value="Dijkot">Dijkot</option>
                                                            <option value="Dinan Bashnoian Wala">Dinan Bashnoian Wala</option>
                                                            <option value="Dinga">Dinga</option>
                                                            <option value="Dipalpur">Dipalpur</option>
                                                            <option value="Dullewala">Dullewala</option>
                                                            <option value="Dunga Bunga">Dunga Bunga</option>
                                                            <option value="Dunyapur">Dunyapur</option>
                                                            <option value="Eminabad">Eminabad</option>
                                                            <option value="Faisalabad">Faisalabad</option>
                                                            <option value="Faqirwali">Faqirwali</option>
                                                            <option value="Faruka">Faruka</option>
                                                            <option value="Fazilpur">Fazilpur</option>
                                                            <option value="Ferozewala">Ferozewala</option>
                                                            <option value="Fort Abbas">Fort Abbas</option>
                                                            <option value="Garh Maharaja">Garh Maharaja</option>
                                                            <option value="Gojra">Gojra</option>
                                                            <option value="Gujar Khan">Gujar Khan</option>
                                                            <option value="Gujranwala">Gujranwala</option>
                                                            <option value="Gujranwala Division">Gujranwala Division</option>
                                                            <option value="Gujrat">Gujrat</option>
                                                            <option value="Hadali">Hadali</option>
                                                            <option value="Hafizabad">Hafizabad</option>
                                                            <option value="Harnoli">Harnoli</option>
                                                            <option value="Harunabad">Harunabad</option>
                                                            <option value="Hasan Abdal">Hasan Abdal</option>
                                                            <option value="Hasilpur">Hasilpur</option>
                                                            <option value="Haveli Lakha">Haveli Lakha</option>
                                                            <option value="Hazro">Hazro</option>
                                                            <option value="Hyderabad">Hyderabad</option>
                                                            <option value="Hujra Shah Muqeem">Hujra Shah Muqeem</option>
                                                            <option value="Jahanian Shah">Jahanian Shah</option>
                                                            <option value="Jalalpur Jattan">Jalalpur Jattan</option>
                                                            <option value="Jalalpur Pirwala">Jalalpur Pirwala</option>
                                                            <option value="Jampur">Jampur</option>
                                                            <option value="Jand">Jand</option>
                                                            <option value="Jandiala Sher Khan">Jandiala Sher Khan</option>
                                                            <option value="Jaranwala">Jaranwala</option>
                                                            <option value="Jatoi Shimali">Jatoi Shimali</option>
                                                            <option value="Jauharabad">Jauharabad</option>
                                                            <option value="Jhang">Jhang</option>
                                                            <option value="Jhang Sadar">Jhang Sadar</option>
                                                            <option value="Jhawarian">Jhawarian</option>
                                                            <option value="Jhelum">Jhelum</option>
                                                            <option value="Islamabad">Islamabad</option>
                                                            <option value="Karachi">Karachi</option>
                                                            <option value="Kabirwala">Kabirwala</option>
                                                            <option value="Kahna Nau">Kahna Nau</option>
                                                            <option value="Kahuta">Kahuta</option>
                                                            <option value="Kalabagh">Kalabagh</option>
                                                            <option value="Kalaswala">Kalaswala</option>
                                                            <option value="Kaleke Mandi">Kaleke Mandi</option>
                                                            <option value="Kallar Kahar">Kallar Kahar</option>
                                                            <option value="Kalur Kot">Kalur Kot</option>
                                                            <option value="Kamalia">Kamalia</option>
                                                            <option value="Kamar Mushani">Kamar Mushani</option>
                                                            <option value="Kamoke">Kamoke</option>
                                                            <option value="Kamra">Kamra</option>
                                                            <option value="Kanganpur">Kanganpur</option>
                                                            <option value="Karor">Karor</option>
                                                            <option value="Kasur">Kasur</option>
                                                            <option value="Keshupur">Keshupur</option>
                                                            <option value="Khairpur Tamiwali">Khairpur Tamiwali</option>
                                                            <option value="Khandowa">Khandowa</option>
                                                            <option value="Khanewal">Khanewal</option>
                                                            <option value="Khanga Dogran">Khanga Dogran</option>
                                                            <option value="Khangarh">Khangarh</option>
                                                            <option value="Khanpur">Khanpur</option>
                                                            <option value="Kharian">Kharian</option>
                                                            <option value="Khewra">Khewra</option>
                                                            <option value="Khurrianwala">Khurrianwala</option>
                                                            <option value="Khushab">Khushab</option>
                                                            <option value="Kohror Pakka">Kohror Pakka</option>
                                                            <option value="Kot Addu Tehsil">Kot Addu Tehsil</option>
                                                            <option value="Kot Ghulam Muhammad">Kot Ghulam Muhammad</option>
                                                            <option value="Kot Mumin">Kot Mumin</option>
                                                            <option value="Kot Radha Kishan">Kot Radha Kishan</option>
                                                            <option value="Kot Rajkour">Kot Rajkour</option>
                                                            <option value="Kot Samaba">Kot Samaba</option>
                                                            <option value="Kot Sultan">Kot Sultan</option>
                                                            <option value="Kotli Loharan">Kotli Loharan</option>
                                                            <option value="Kundian">Kundian</option>
                                                            <option value="Kunjah">Kunjah</option>
                                                            <option value="Ladhewala Waraich">Ladhewala Waraich</option>
                                                            <option value="Lahore">Lahore</option>
                                                            <option value="Lala Musa">Lala Musa</option>
                                                            <option value="Lalian">Lalian</option>
                                                            <option value="Layyah">Layyah</option>
                                                            <option value="Layyah District">Layyah District</option>
                                                            <option value="Liliani">Liliani</option>
                                                            <option value="Lodhran">Lodhran</option>
                                                            <option value="Mansehra">Mansehra</option>
                                                            <option value="Mailsi">Mailsi</option>
                                                            <option value="Malakwal">Malakwal</option>
                                                            <option value="Malakwal City">Malakwal City</option>
                                                            <option value="Mamu Kanjan">Mamu Kanjan</option>
                                                            <option value="Mananwala">Mananwala</option>
                                                            <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                                                            <option value="Mandi Bahauddin District">Mandi Bahauddin District
                                                            </option>
                                                            <option value="Mangla">Mangla</option>
                                                            <option value="Mankera">Mankera</option>
                                                            <option value="Mehmand Chak">Mehmand Chak</option>
                                                            <option value="Mian Channun">Mian Channun</option>
                                                            <option value="Mianke Mor">Mianke Mor</option>
                                                            <option value="Mianwali">Mianwali</option>
                                                            <option value="Minchinabad">Minchinabad</option>
                                                            <option value="Mitha Tiwana">Mitha Tiwana</option>
                                                            <option value="Moza Shahwala">Moza Shahwala</option>
                                                            <option value="Multan">Multan</option>
                                                            <option value="Multan District">Multan District</option>
                                                            <option value="Muridke">Muridke</option>
                                                            <option value="Murree">Murree</option>
                                                            <option value="Mustafabad">Mustafabad</option>
                                                            <option value="Muzaffargarh">Muzaffargarh</option>
                                                            <option value="Nankana Sahib">Nankana Sahib</option>
                                                            <option value="Narang Mandi">Narang Mandi</option>
                                                            <option value="Narowal">Narowal</option>
                                                            <option value="Naushahra Virkan">Naushahra Virkan</option>
                                                            <option value="Nazir Town">Nazir Town</option>
                                                            <option value="Okara">Okara</option>
                                                            <option value="Pakki Shagwanwali">Pakki Shagwanwali</option>
                                                            <option value="Pakpattan">Pakpattan</option>
                                                            <option value="Pasrur">Pasrur</option>
                                                            <option value="Pattoki">Pattoki</option>
                                                            <option value="Peshawar">Peshawar</option>
                                                            <option value="Phalia">Phalia</option>
                                                            <option value="Pind Dadan Khan">Pind Dadan Khan</option>
                                                            <option value="Pindi Bhattian">Pindi Bhattian</option>
                                                            <option value="Pindi Gheb">Pindi Gheb</option>
                                                            <option value="Pir Mahal">Pir Mahal</option>
                                                            <option value="Qadirpur Ran">Qadirpur Ran</option>
                                                            <option value="Qila Didar Singh">Qila Didar Singh</option>
                                                            <option value="Rabwah">Rabwah</option>
                                                            <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                                                            <option value="Rahimyar Khan District">Rahimyar Khan District</option>
                                                            <option value="Raiwind">Raiwind</option>
                                                            <option value="Raja Jang">Raja Jang</option>
                                                            <option value="Rajanpur">Rajanpur</option>
                                                            <option value="Rasulnagar">Rasulnagar</option>
                                                            <option value="Rawalpindi">Rawalpindi</option>
                                                            <option value="Rawalpindi District">Rawalpindi District</option>
                                                            <option value="Renala Khurd">Renala Khurd</option>
                                                            <option value="Rojhan">Rojhan</option>
                                                            <option value="Sheikhupura">Sheikhupura</option>
                                                            <option value="Sawabi">Sawabi</option>
                                                            <option value="Sadiqabad">Sadiqabad</option>
                                                            <option value="Sahiwal">Sahiwal</option>
                                                            <option value="Sambrial">Sambrial</option>
                                                            <option value="Sangla Hill">Sangla Hill</option>
                                                            <option value="Sanjwal">Sanjwal</option>
                                                            <option value="Sarai Alamgir">Sarai Alamgir</option>
                                                            <option value="Sarai Sidhu">Sarai Sidhu</option>
                                                            <option value="Sargodha">Sargodha</option>
                                                            <option value="Shahkot Tehsil">Shahkot Tehsil</option>
                                                            <option value="Shahpur">Shahpur</option>
                                                            <option value="Sukkur">Sukkur</option>
                                                            <option value="Shahr Sultan">Shahr Sultan</option>
                                                            <option value="Shakargarh">Shakargarh</option>
                                                            <option value="Sharqpur">Sharqpur</option>
                                                            <option value="Sheikhupura">Sheikhupura</option>
                                                            <option value="Shorkot">Shorkot</option>
                                                            <option value="Shujaabad">Shujaabad</option>
                                                            <option value="Sialkot">Sialkot</option>
                                                            <option value="Sillanwali">Sillanwali</option>
                                                            <option value="Sodhra">Sodhra</option>
                                                            <option value="Sukheke Mandi">Sukheke Mandi</option>
                                                            <option value="Surkhpur">Surkhpur</option>
                                                            <option value="Talagang">Talagang</option>
                                                            <option value="Talamba">Talamba</option>
                                                            <option value="Tandlianwala">Tandlianwala</option>
                                                            <option value="Taunsa">Taunsa</option>
                                                            <option value="Toba Tek Singh">Toba Tek Singh</option>
                                                            <option value="Umerkot">Umerkot</option>
                                                            <option value="Vihari">Vihari</option>
                                                            <option value="Wah">Wah</option>
                                                            <option value="Warburton">Warburton</option>
                                                            <option value="Wazirabad">Wazirabad</option>
                                                            <option value="West Punjab">West Punjab</option>
                                                            <option value="Yazman">Yazman</option>
                                                            <option value="Zafarwal">Zafarwal</option>
                                                            <option value="Zahir Pir">Zahir Pir</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <label class="text-label">Address</label>
                                                        <input type="text" name="address" id="address" class="form-control" value="" />
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <label class="text-label">Your Current Salary*</label>
                                                        <input type="number" name="currentsalary" id="currentsalery" class="form-control" value="" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <label class="text-label">Your Expected Salary*</label>
                                                        <input type="number" name="expectedsalary" id="expectedsalary" class="form-control" value="" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <label class="text-label">Earliest Date of Joining*</label>
                                                        <select class="form-control default-select" id="available" tabindex="-98" name="available">
                                                            <option>Immediate</option>
                                                            <option>1 week</option>
                                                            <option>2 weeks</option>
                                                            <option>1 month</option>
                                                        </select>

                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <label class="text-label">Linkedin Profile <i class="fa fa-link"></i></label>
                                                        <input type="url" name="linkdin" id="linkdin" class="form-control" value="" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <label class="text-label">Website/Blog <i class="fa fa-link"></i></label>
                                                        <input type="url" name="website" id="website" class="form-control" value="" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <label class="text-label">Resume*</label>
                                                        <input type="file" name="resume" id="resume" class="form-control" onchange="validateResume()" />
                                                        <p>Only PDF file(upto 2 mb)</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <button type="submit" class="btn btn-primary" style={{ float: 'right' }}>APPLY</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default jobgraphicdesigner