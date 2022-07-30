import React, { useState } from "react";
import { StyleSheet, Text, TextInput,View, Button, CheckBox} from "react-native";
// import { TextInput } from "react-native-web";
import { styles } from '../styles';
const Offer = require("../../objects/Offer");

//Pass in user
export default function MakeOffer() {

//TextFields
    const [Username, onUserChange] = React.useState("")
    const [Business, onBusinessChange] = React.useState("")
    const [Product, onProductChange] = React.useState("")
    const [Tiktok, onTikChange] = React.useState("")
    const [Instagram, onInstagramChange] = React.useState("")
    const [Facebook, onFacebookChange] = React.useState("")
    const [Twitter, onTwitterChange] = React.useState("")
    const [Linkedin, onLinkedinChange] = React.useState("")
    const [Pinterest, onPinterestChange] = React.useState("")
    const [Reddit, onRedditChange] = React.useState("")
    const [Website, onWebsiteChange] = React.useState("")

//tiktok,instagram, facebook,twitter,Linkedin, Pinterest, Reddit, Website
//Checkboxes    
    const [isTiktok, setTiktok] = useState(false)
    const [isInstagram, setInstagram] = useState(false)
    const [isFacebook, setFacebook] = useState(false)
    const [isTwitter, setTwitter] = useState(false)
    const [isLinkedin, setLinkedin] = useState(false)
    const [isPinterest, setPinterest] = useState(false)
    const [isReddit, setReddit] = useState(false)
    const [isWebsite, setWebsite] = useState(false)


    //This function is made to make the offer object, as well as sending the object out to the right person
    //based on the type of user that is using it
	function createOffer() {
        let sendertype = 'User';
        let socials = [Tiktok,Instagram,Facebook,Twitter,Linkedin,Pinterest, Reddit, Website]
	    const offer = new Offer(Username,Business,Product,socials,sendertype);
		//Add it to somewhere
        console.log(offer)
        //Testing pourposes:
            //Print out Offer
	}

	return (
		<View style ={s.main}>
            <Text style={s.pageHeader}> Make an Offer </Text>
            <View>
                <Text style={s.header}>
                User
                </Text>
                <TextInput
                style={s.input}
                // onChangeText={onUserChange}
                value={Username}
				placeholder="Search"
                />

                <Text style={s.header}>
                Buisness
                </Text>
                <TextInput
                style={s.input}
                onChangeText={onBusinessChange}
                value={Business}
				placeholder = "Search"
                />

                <Text style={s.header}>
                Product
                </Text>
                <TextInput
                style={s.input}
                onChangeText={onProductChange}
                value={Product}
				placeholder = "Search"
                />
            </View>

            <View>
                <Text style={s.header}>
                Socials to be used 
                </Text>
                <Text>
                <CheckBox
                value={isTiktok}
                onValueChange={setTiktok}
                style = {styles.checkbox}
                />
                TikTok
                {isTiktok &&
                <TextInput
                style={s.input}
                onChangeText={onTikChange}
                value={Tiktok}
				placeholder = "Enter TikTok Handle"
                />       
                }      
                </Text>
                <Text>
                <CheckBox
                value={isInstagram}
                onValueChange={setInstagram}
                style = {styles.checkbox}
                />
                Instagram
                {isInstagram &&
                <TextInput
                style={s.input}
                onChangeText={onInstagramChange}
                value={Instagram}
				placeholder = "Enter Instagram Handle"
                />       
                }      
                </Text>

                <Text>
                <CheckBox
                value={isFacebook}
                onValueChange={setFacebook}
                style = {styles.checkbox}
                />
                Facebook
                {isFacebook &&
                <TextInput
                style={s.input}
                onChangeText={onFacebookChange}
                value={Facebook}
				placeholder = "Enter Facebook Handle"
                />       
                }      
                </Text>

                <Text>
                <CheckBox
                value={isTwitter}
                onValueChange={setTwitter}
                style = {styles.checkbox}
                />
                Twitter
                {isTwitter &&
                <TextInput
                style={s.input}
                onChangeText={onTwitterChange}
                value={Twitter}
				placeholder = "Enter Twitter Handle"
                />       
                }      
                </Text>

                <Text>
                <CheckBox
                value={isLinkedin}
                onValueChange={setLinkedin}
                style = {styles.checkbox}
                />
                Linkedin
                {isLinkedin &&
                <TextInput
                style={s.input}
                onChangeText={onLinkedinChange}
                value={Linkedin}
				placeholder = "Enter link to LinkedIn"
                />       
                }      
                </Text>    

                <Text>
                <CheckBox
                value={isPinterest}
                onValueChange={setPinterest}
                style = {styles.checkbox}
                />
                Pinterest
                {isPinterest &&
                <TextInput
                style={s.input}
                onChangeText={onPinterestChange}
                value={Pinterest}
				placeholder = "Enter Pinterest Handle"
                />       
                }      
                </Text>  

                <Text>
                <CheckBox
                value={isReddit}
                onValueChange={setReddit}
                style = {styles.checkbox}
                />
                Reddit
                {isReddit &&
                <TextInput
                style={s.input}
                onChangeText={onRedditChange}
                value={Reddit}
				placeholder = "Enter Reddit Handle"
                />       
                }      
                </Text>

                <Text>
                <CheckBox
                value={isWebsite}
                onValueChange={setWebsite}
                style = {styles.checkbox}
                />
                Personal Website
                {isWebsite &&
                <TextInput
                style={s.input}
                onChangeText={onWebsiteChange}
                value={Website}
				placeholder = "Enter Personal Website Link"
                />       
                }      
                </Text>    
            </View>

			<Button
			title="Make Offer"
			onPress={() => createOffer()}
			/>
        </View>
	);
}

const s = StyleSheet.create({
	pageHeader: {
        textAlign: 'center',
		fontSize: 40,
		padding: 10,
		margin: 5,
	},
	main: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		fontSize: 20,
		textAlign: 'center',
	},
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    checkbox: {
        margin: 6,
    },
});