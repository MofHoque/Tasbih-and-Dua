// Islamic Data
const islamicData = {
  "tasbih": [
    {"id": 1, "title": "SubhanAllah", "arabic": "سُبْحَانَ اللَّهِ", "transliteration": "Subhanallah", "meaning": "Glory be to Allah", "recommended": {"times": 33, "context": "After salah"}, "counter": {"value": 0, "target": 33, "step": 1, "session": 0, "total": 0}},
    {"id": 2, "title": "Alhamdulillah", "arabic": "الْـحَمْدُ لِلَّهِ", "transliteration": "Alhamdu lillah", "meaning": "All praise is for Allah", "recommended": {"times": 33, "context": "After salah"}, "counter": {"value": 0, "target": 33, "step": 1, "session": 0, "total": 0}},
    {"id": 3, "title": "Allahu Akbar", "arabic": "اللَّهُ أَكْبَرُ", "transliteration": "Allahu Akbar", "meaning": "Allah is the Greatest", "recommended": {"times": 34, "context": "After salah / before sleep (Tasbih Fatimah)"}, "counter": {"value": 0, "target": 34, "step": 1, "session": 0, "total": 0}},
    {"id": 4, "title": "SubhanAllahi wa bihamdihi", "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", "transliteration": "Subhanallahi wa bihamdihi", "meaning": "Glory be to Allah and praise be to Him", "recommended": {"times": 100, "context": "Daily"}, "counter": {"value": 0, "target": 100, "step": 1, "session": 0, "total": 0}},
    {"id": 5, "title": "SubhanAllahi wa bihamdihi, SubhanAllahil-Azim", "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيم", "transliteration": "Subhanallahi wa bihamdihi, Subhanallahil-'Azim", "meaning": "Glory be to Allah and praise be to Him; Glory be to Allah, the Magnificent", "recommended": {"times": 100, "context": "Daily"}, "counter": {"value": 0, "target": 100, "step": 1, "session": 0, "total": 0}},
    {"id": 6, "title": "La ilaha illallah", "arabic": "لَا إِلَهَ إِلَّا اللَّهُ", "transliteration": "La ilaha illallah", "meaning": "There is no god except Allah", "recommended": {"times": 100, "context": "General dhikr"}, "counter": {"value": 0, "target": 100, "step": 1, "session": 0, "total": 0}},
    {"id": 7, "title": "Astaghfirullah", "arabic": "أَسْتَغْفِرُ اللَّهَ", "transliteration": "Astaghfirullah", "meaning": "I seek Allah's forgiveness", "recommended": {"times": 100, "context": "Morning/Evening"}, "counter": {"value": 0, "target": 100, "step": 1, "session": 0, "total": 0}},
    {"id": 8, "title": "La hawla wa la quwwata illa billah", "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", "transliteration": "La hawla wa la quwwata illa billah", "meaning": "There is no power nor might except with Allah", "recommended": {"times": 100, "context": "Relief from burden"}, "counter": {"value": 0, "target": 100, "step": 1, "session": 0, "total": 0}},
    {"id": 9, "title": "Hasbunallahu wa ni'mal Wakil", "arabic": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", "transliteration": "Hasbunallahu wa ni'mal Wakil", "meaning": "Allah is sufficient for us and He is the best Disposer of affairs", "recommended": {"times": 7, "context": "Anxiety / Reliance"}, "counter": {"value": 0, "target": 7, "step": 1, "session": 0, "total": 0}},
    {"id": 10, "title": "Tasbih Fatimah (before sleep)", "arabic": "33×سُبْحَانَ اللَّهِ • 33×الْـحَمْدُ لِلَّهِ • 34×اللَّهُ أَكْبَرُ", "transliteration": "33× Subhanallah • 33× Alhamdu lillah • 34× Allahu Akbar", "meaning": "The tasbih taught to Fatimah (RA) before sleep", "recommended": {"times": 100, "context": "Before sleep (split 33/33/34)"}, "counter": {"value": 0, "target": 100, "step": 1, "session": 0, "total": 0}},
    {"id": 11, "title": "La ilaha illallahu wahdahu la sharika lah...", "arabic": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", "transliteration": "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir", "meaning": "There is no god but Allah, alone without partner, His is the dominion and praise, and He is over all things capable", "recommended": {"times": 100, "context": "Morning/Evening"}, "counter": {"value": 0, "target": 100, "step": 1, "session": 0, "total": 0}},
    {"id": 12, "title": "SubhanAllahi walhamdulillahi wa la ilaha illAllahu wallahu akbar", "arabic": "سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللّٰهُ وَاللّٰهُ أَكْبَرُ", "transliteration": "Subhanallahi walhamdulillahi wa la ilaha illallahu wallahu akbar", "meaning": "Glory be to Allah, praise be to Allah, none has the right to be worshipped but Allah, and Allah is the Greatest", "recommended": {"times": 100, "context": "Comprehensive dhikr"}, "counter": {"value": 0, "target": 100, "step": 1, "session": 0, "total": 0}},
    {"id": 13, "title": "La ilaha illallahu al-Malikul Haqqul Mubin", "arabic": "لَا إِلٰهَ إِلَّا اللّٰهُ الْمَلِكُ الْحَقُّ الْمُبِينُ", "transliteration": "La ilaha illallahu al-Malikul Haqqul Mubin", "meaning": "There is no god but Allah, the Sovereign, the True, the Clear", "recommended": {"times": 100, "context": "General dhikr"}, "counter": {"value": 0, "target": 100, "step": 1, "session": 0, "total": 0}},
    {"id": 14, "title": "Salat upon the Prophet", "arabic": "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ", "transliteration": "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad", "meaning": "O Allah, send prayers upon Muhammad and the family of Muhammad", "recommended": {"times": 100, "context": "Anytime, especially Friday"}, "counter": {"value": 0, "target": 100, "step": 1, "session": 0, "total": 0}},
    {"id": 15, "title": "Hasbiyallahu la ilaha illa Huwa 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Azim", "arabic": "حَسْبِيَ اللّٰهُ لَا إِلٰهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", "transliteration": "Hasbiyallahu la ilaha illa Huwa, 'alayhi tawakkaltu, wa Huwa Rabbul-'Arshil-'Azim", "meaning": "Allah is sufficient for me. None has the right to be worshipped but Him. I rely on Him, and He is the Lord of the Mighty Throne", "recommended": {"times": 7, "context": "Distress"}, "counter": {"value": 0, "target": 7, "step": 1, "session": 0, "total": 0}},
    {"id": 16, "title": "Bismillahilladhi la yadurru...", "arabic": "بِسْمِ اللّٰهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", "transliteration": "Bismillahi-lladhi la yadurru ma'a ismihi shay'un fil-ardi wa la fis-sama'i wa Huwa as-Sami'ul-'Alim", "meaning": "In the Name of Allah, with Whose Name nothing in the earth nor the heaven can cause harm; He is the All-Hearing, All-Knowing", "recommended": {"times": 3, "context": "Morning/Evening"}, "counter": {"value": 0, "target": 3, "step": 1, "session": 0, "total": 0}},
    {"id": 17, "title": "A'udhu bikalimatillahi-ttammati min sharri ma khalaq", "arabic": "أَعُوذُ بِكَلِمَاتِ اللّٰهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", "transliteration": "A'udhu bi kalimatillahi-ttammati min sharri ma khalaq", "meaning": "I seek refuge in the Perfect Words of Allah from the evil of what He created", "recommended": {"times": 3, "context": "Evening / Travel"}, "counter": {"value": 0, "target": 3, "step": 1, "session": 0, "total": 0}},
    {"id": 18, "title": "La ilaha illallah subhanaka inni kuntu minaz-zalimin", "arabic": "لَا إِلٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", "transliteration": "La ilaha illa Anta subhanaka inni kuntu mina-z-zalimin", "meaning": "There is no god but You; Glory be to You! Truly, I was among the wrongdoers", "recommended": {"times": 100, "context": "Distress / Repentance"}, "counter": {"value": 0, "target": 100, "step": 1, "session": 0, "total": 0}},
    {"id": 19, "title": "Subhanallahi wa bihamdihi 'adada khalqihi...", "arabic": "سُبْحَانَ اللّٰهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ", "transliteration": "Subhanallahi wa bihamdihi, 'adada khalqihi, wa rida nafsihi, wa zinata 'arshihi, wa midada kalimatihi", "meaning": "Glory be to Allah and praise be to Him: by the number of His creation, by His pleasure, by the weight of His Throne, and by the ink of His words", "recommended": {"times": 3, "context": "Morning"}, "counter": {"value": 0, "target": 3, "step": 1, "session": 0, "total": 0}},
    {"id": 20, "title": "La ilaha illallah al-'Aliyyul-'Azim", "arabic": "لَا إِلٰهَ إِلَّا اللّٰهُ الْعَلِيُّ الْعَظِيمُ", "transliteration": "La ilaha illallahu al-'Aliyyul-'Azim", "meaning": "There is no god but Allah, the Most High, the Magnificent", "recommended": {"times": 100, "context": "General dhikr"}, "counter": {"value": 0, "target": 100, "step": 1, "session": 0, "total": 0}}
  ],
  "duas": [
    {"id": 1, "title": "Adam & Hawa (Forgiveness)", "source": "Quran 7:23", "arabic": "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", "transliteration": "Rabbana zalamna anfusana wa illam taghfir lana wa tarhamna lanakunanna minal-khasirin", "meaning": "Our Lord, we have wronged ourselves. If You do not forgive us and have mercy upon us, we will surely be among the losers.", "counter": {"value": 0, "target": 1}},
    {"id": 2, "title": "Rabbana atina fid-dunya hasanah", "source": "Quran 2:201", "arabic": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّار", "transliteration": "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar", "meaning": "Our Lord, grant us good in this world and good in the Hereafter and protect us from the punishment of the Fire.", "counter": {"value": 0, "target": 1}},
    {"id": 3, "title": "Rabbana la tu'akhidhna", "source": "Quran 2:286", "arabic": "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا • رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا • رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ • وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا • أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ", "transliteration": "Rabbana la tu'akhidhna in nasina aw akhta'na • Rabbana wa la tahmil 'alayna isran kama hamaltahu 'ala alladhina min qablina • Rabbana wa la tuhammilna ma la taqata lana bihi • Wa'fu 'anna waghfir lana warhamna • Anta mawlana fansurna 'ala al-qawm al-kafirin", "meaning": "Our Lord, do not impose blame upon us if we forget or make a mistake. Our Lord, do not lay upon us a burden like that which You laid upon those before us. Our Lord, do not burden us with what we have no strength to bear. Pardon us, forgive us, and have mercy on us. You are our Protector, so give us victory over the disbelieving people.", "counter": {"value": 0, "target": 1}},
    {"id": 4, "title": "Rabbana hablana min azwajina", "source": "Quran 25:74", "arabic": "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا", "transliteration": "Rabbana hablana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqina imama", "meaning": "Our Lord, grant us from our spouses and offspring the comfort of our eyes and make us leaders of the righteous.", "counter": {"value": 0, "target": 1}},
    {"id": 5, "title": "Rabbana afrigh 'alayna sabran", "source": "Quran 2:250", "arabic": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ", "transliteration": "Rabbana afrigh 'alayna sabran wa thabbit aqdamana wansurna 'alal-qawmil-kafirin", "meaning": "Our Lord, pour upon us patience, make our steps firm, and grant us victory over the disbelieving people.", "counter": {"value": 0, "target": 1}},
    {"id": 6, "title": "Rabbana la tuzigh qulubana", "source": "Quran 3:8", "arabic": "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ", "transliteration": "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hablana min ladunka rahmah innaka anta al-Wahhab", "meaning": "Our Lord, let not our hearts deviate after You have guided us and grant us mercy from You. Indeed, You are the Bestower.", "counter": {"value": 0, "target": 1}},
    {"id": 7, "title": "Rabbana atim lana nurana", "source": "Quran 66:8", "arabic": "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", "transliteration": "Rabbana atim lana nurana waghfir lana innaka 'ala kulli shay'in qadir", "meaning": "Our Lord, complete for us our light and forgive us. Indeed, You are over all things competent.", "counter": {"value": 0, "target": 1}},
    {"id": 8, "title": "Rabbij 'alni muqimas-salah", "source": "Quran 14:40", "arabic": "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ", "transliteration": "Rabbi ij'alni muqimas-salah wa min dhurriyati Rabbana wa taqabbal du'a'", "meaning": "My Lord, make me an establisher of prayer, and from my descendants. Our Lord, accept my supplication.", "counter": {"value": 0, "target": 1}},
    {"id": 9, "title": "Rabbishrah li sadri", "source": "Quran 20:25-28", "arabic": "رَبِّ اشْرَحْ لِي صَدْرِي • وَيَسِّرْ لِي أَمْرِي • وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي • يَفْقَهُوا قَوْلِي", "transliteration": "Rabbi ishrah li sadri • wa yassir li amri • wahlul 'uqdatan min lisani • yafqahu qawli", "meaning": "My Lord, expand for me my chest, ease my task for me, and untie the knot from my tongue so they may understand my speech.", "counter": {"value": 0, "target": 1}},
    {"id": 10, "title": "Rabbi zidni 'ilma", "source": "Quran 20:114", "arabic": "رَبِّ زِدْنِي عِلْمًا", "transliteration": "Rabbi zidni 'ilma", "meaning": "My Lord, increase me in knowledge.", "counter": {"value": 0, "target": 1}},
    {"id": 11, "title": "Rabbana ghfir lana dhunubana", "source": "Quran 3:147", "arabic": "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا", "transliteration": "Rabbana ighfir lana dhunubana wa israfana fi amrina wa thabbit aqdamana", "meaning": "Our Lord, forgive us our sins and our excesses in our affairs and plant firmly our feet.", "counter": {"value": 0, "target": 1}},
    {"id": 12, "title": "Hasbunallahu wa ni'mal Wakil", "source": "Quran 3:173", "arabic": "حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيلُ", "transliteration": "Hasbunallahu wa ni'mal Wakil", "meaning": "Allah is sufficient for us, and He is the best Disposer of affairs.", "counter": {"value": 0, "target": 7}},
    {"id": 13, "title": "Dua Yunus", "source": "Quran 21:87", "arabic": "لَا إِلٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", "transliteration": "La ilaha illa Anta subhanaka inni kuntu mina-z-zalimin", "meaning": "There is no god but You; Glory be to You! I was indeed among the wrongdoers.", "counter": {"value": 0, "target": 100}},
    {"id": 14, "title": "Sayyidul-Istighfar", "source": "Hadith (Bukhari)", "arabic": "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", "transliteration": "Allahumma anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bi ni'matika 'alayya, wa abu'u laka bi dhanbi faghfir li, fa innahu la yaghfir adh-dhunuba illa Anta", "meaning": "O Allah, You are my Lord, none has the right to be worshipped but You. You created me and I am Your servant, and I am keeping my promise and covenant to You as much as I can. I seek refuge in You from the evil of what I have done. I acknowledge before You all the blessings You have bestowed upon me, and I confess to You all my sins. So forgive me, for surely none forgives sins except You.", "counter": {"value": 0, "target": 1}},
    {"id": 15, "title": "Allahumma inni 'ala dhikrika", "source": "Hadith (Abu Dawud)", "arabic": "اللَّهُمَّ أَعِنِّي عَلَىٰ ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ", "transliteration": "Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik", "meaning": "O Allah, help me to remember You, thank You, and worship You in the best manner.", "counter": {"value": 0, "target": 1}},
    {"id": 16, "title": "Allahumma inni as'aluka 'ilman nafian", "source": "Hadith (Ibn Majah)", "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا", "transliteration": "Allahumma inni as'aluka 'ilman nafi'an wa rizqan tayyiban wa 'amalan mutaqabbalan", "meaning": "O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.", "counter": {"value": 0, "target": 1}},
    {"id": 17, "title": "Four protections (after tashahhud)", "source": "Hadith (Muslim)", "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ وَمِنْ عَذَابِ الْقَبْرِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ", "transliteration": "Allahumma inni a'udhu bika min 'adhabi Jahannam, wa min 'adhabil-qabr, wa min fitnatil-mahya wal-mamat, wa min sharri fitnatil-Masihid-Dajjal", "meaning": "O Allah, I seek refuge in You from the punishment of Hell, the punishment of the grave, the trials of life and death, and the evil of the trial of the False Messiah.", "counter": {"value": 0, "target": 1}},
    {"id": 18, "title": "Allahumma inni as'aluka al-huda...", "source": "Hadith (Muslim)", "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى", "transliteration": "Allahumma inni as'aluka al-huda wat-tuqa wal-'afafa wal-ghina", "meaning": "O Allah, I ask You for guidance, piety, chastity and sufficiency.", "counter": {"value": 0, "target": 1}},
    {"id": 19, "title": "Dua of distress", "source": "Hadith (Abu Dawud)", "arabic": "اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ وَأَصْلِحْ لِي شَأْنِي كُلَّهُ لَا إِلٰهَ إِلَّا أَنْتَ", "transliteration": "Allahumma rahmataka arju fala takilni ila nafsi tarfata 'ayn wa aslih li sha'ni kullahu la ilaha illa Anta", "meaning": "O Allah, I hope for Your mercy, so do not leave me to myself even for the blink of an eye and rectify for me all of my affairs. None has the right to be worshipped but You.", "counter": {"value": 0, "target": 1}},
    {"id": 20, "title": "Anxiety & debt", "source": "Hadith (Bukhari)", "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ", "transliteration": "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dal'id-dayni wa ghalabatir-rijal", "meaning": "O Allah, I seek refuge in You from anxiety, sorrow, incapacity, laziness, miserliness, cowardice, the burden of debt and being overpowered by people.", "counter": {"value": 0, "target": 1}},
    {"id": 21, "title": "Comprehensive good", "source": "Hadith (Tirmidhi)", "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَأَعُوذُ بِكَ مِنْ شَرِّ مَا اسْتَعَاذَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ", "transliteration": "Allahumma inni as'aluka min khayri ma sa'alaka minhu nabiyyuka Muhammad sallallahu 'alayhi wa sallam wa a'udhu bika min sharri ma ista'adha minhu nabiyyuka Muhammad sallallahu 'alayhi wa sallam", "meaning": "O Allah, I ask You for the best of what Your Prophet Muhammad (peace be upon him) asked You for, and I seek refuge in You from the evil from which Your Prophet Muhammad (peace be upon him) sought refuge.", "counter": {"value": 0, "target": 1}},
    {"id": 22, "title": "'Afiyah (wellbeing)", "source": "Hadith (Ahmad)", "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ", "transliteration": "Allahumma inni as'aluka al-'afiyata fid-dunya wal-akhirah", "meaning": "O Allah, I ask You for wellbeing in this world and the Hereafter.", "counter": {"value": 0, "target": 1}},
    {"id": 23, "title": "Morning remembrance", "source": "Hadith (Muslim)", "arabic": "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", "transliteration": "Asbahna wa asbaha al-mulku lillahi, walhamdu lillahi, la ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir", "meaning": "We have entered the morning and the dominion belongs to Allah, and all praise belongs to Allah. None has the right to be worshipped but Allah alone, without partner. His is the dominion and His is the praise, and He is over all things competent.", "counter": {"value": 0, "target": 1}},
    {"id": 24, "title": "Evening remembrance", "source": "Hadith (Muslim)", "arabic": "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", "transliteration": "Amsayna wa amsa al-mulku lillahi, walhamdu lillahi, la ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir", "meaning": "We have entered the evening and the dominion belongs to Allah, and all praise belongs to Allah. None has the right to be worshipped but Allah alone, without partner. His is the dominion and His is the praise, and He is over all things competent.", "counter": {"value": 0, "target": 1}},
    {"id": 25, "title": "Travel dua", "source": "Hadith (Muslim)", "arabic": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ", "transliteration": "Allahu Akbar, Allahu Akbar, Allahu Akbar, Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin wa inna ila rabbina lamunqalibun", "meaning": "Allah is the Greatest, Allah is the Greatest, Allah is the Greatest. Glory be to Him who has subjected this to us, and we were not capable of it, and surely to our Lord we will return.", "counter": {"value": 0, "target": 1}},
    {"id": 26, "title": "Protection from anxiety", "source": "Hadith (Bukhari)", "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ", "transliteration": "Allahumma inni a'udhu bika minal-hammi wal-hazan, wa a'udhu bika minal-'ajzi wal-kasal, wa a'udhu bika minal-jubni wal-bukhl, wa a'udhu bika min ghalabatid-dayni wa qahrir-rijal", "meaning": "O Allah, I seek refuge in You from worry and grief, I seek refuge in You from incapacity and laziness, I seek refuge in You from cowardice and miserliness, and I seek refuge in You from being overwhelmed by debt and overpowered by people.", "counter": {"value": 0, "target": 1}},
    {"id": 27, "title": "When waking up", "source": "Hadith (Bukhari)", "arabic": "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", "transliteration": "Alhamdu lillahilladhi ahyana ba'da ma amatana wa ilayhin-nushur", "meaning": "All praise is for Allah who gave us life after having taken it and to Him is the resurrection.", "counter": {"value": 0, "target": 1}},
    {"id": 28, "title": "For knowledge", "source": "Hadith (Tirmidhi)", "arabic": "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا", "transliteration": "Allahumman fa'ni bima 'allamtani wa 'allimni ma yanfa'uni wa zidni 'ilma", "meaning": "O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge.", "counter": {"value": 0, "target": 1}},
    {"id": 29, "title": "For ease in hardship", "source": "Hadith (Ibn Hibban)", "arabic": "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا", "transliteration": "Allahumma la sahla illa ma ja'altahu sahlan, wa anta taj'alul-hazna idha shi'ta sahla", "meaning": "O Allah, there is no ease except what You make easy, and You can make hardship easy if You will.", "counter": {"value": 0, "target": 1}},
    {"id": 30, "title": "Prophet Nuh's dua", "source": "Quran 71:28", "arabic": "رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ", "transliteration": "Rabbi ighfir li wa liwalidayya wa liman dakhala bayti mu'minan wa lilmu'minina wal-mu'minat", "meaning": "My Lord, forgive me, my parents, whoever enters my house as a believer, and all the believing men and women.", "counter": {"value": 0, "target": 1}}
  ],
  "names_of_allah": [
    {"id": 1, "arabic": "ٱلرَّحْمَٰن", "transliteration": "Ar-Rahman", "meaning": "The Most Merciful"},
    {"id": 2, "arabic": "ٱلرَّحِيم", "transliteration": "Ar-Rahim", "meaning": "The Most Compassionate"},
    {"id": 3, "arabic": "ٱلْمَلِك", "transliteration": "Al-Malik", "meaning": "The Sovereign"},
    {"id": 4, "arabic": "ٱلْقُدُّوس", "transliteration": "Al-Quddus", "meaning": "The Most Holy"},
    {"id": 5, "arabic": "ٱلسَّلَام", "transliteration": "As-Salam", "meaning": "The Source of Peace"},
    {"id": 6, "arabic": "ٱلْمُؤْمِن", "transliteration": "Al-Mu'min", "meaning": "The Giver of Security"},
    {"id": 7, "arabic": "ٱلْمُهَيْمِن", "transliteration": "Al-Muhaymin", "meaning": "The Protector"},
    {"id": 8, "arabic": "ٱلْعَزِيز", "transliteration": "Al-'Aziz", "meaning": "The Almighty"},
    {"id": 9, "arabic": "ٱلْجَبَّار", "transliteration": "Al-Jabbar", "meaning": "The Compeller"},
    {"id": 10, "arabic": "ٱلْمُتَكَبِّر", "transliteration": "Al-Mutakabbir", "meaning": "The Supreme"},
    {"id": 11, "arabic": "ٱلْخَالِق", "transliteration": "Al-Khaliq", "meaning": "The Creator"},
    {"id": 12, "arabic": "ٱلْبَارِئ", "transliteration": "Al-Bari'", "meaning": "The Evolver"},
    {"id": 13, "arabic": "ٱلْمُصَوِّر", "transliteration": "Al-Musawwir", "meaning": "The Fashioner"},
    {"id": 14, "arabic": "ٱلْغَفَّار", "transliteration": "Al-Ghaffar", "meaning": "The All-Forgiving"},
    {"id": 15, "arabic": "ٱلْقَهَّار", "transliteration": "Al-Qahhar", "meaning": "The Subduer"},
    {"id": 16, "arabic": "ٱلْوَهَّاب", "transliteration": "Al-Wahhab", "meaning": "The Bestower"},
    {"id": 17, "arabic": "ٱلرَّزَّاق", "transliteration": "Ar-Razzaq", "meaning": "The Provider"},
    {"id": 18, "arabic": "ٱلْفَتَّاح", "transliteration": "Al-Fattah", "meaning": "The Opener / Judge"},
    {"id": 19, "arabic": "ٱلْعَلِيم", "transliteration": "Al-'Alim", "meaning": "The All-Knowing"},
    {"id": 20, "arabic": "ٱلْقَابِض", "transliteration": "Al-Qabid", "meaning": "The Withholder"},
    {"id": 21, "arabic": "ٱلْبَاسِط", "transliteration": "Al-Basit", "meaning": "The Expander"},
    {"id": 22, "arabic": "ٱلْخَافِض", "transliteration": "Al-Khafid", "meaning": "The Abaser"},
    {"id": 23, "arabic": "ٱلرَّافِع", "transliteration": "Ar-Rafi'", "meaning": "The Exalter"},
    {"id": 24, "arabic": "ٱلْمُعِزُّ", "transliteration": "Al-Mu'izz", "meaning": "The Honourer"},
    {"id": 25, "arabic": "ٱلْمُذِلُّ", "transliteration": "Al-Mudhill", "meaning": "The Humiliator"},
    {"id": 26, "arabic": "ٱلسَّمِيع", "transliteration": "As-Sami'", "meaning": "The All-Hearing"},
    {"id": 27, "arabic": "ٱلْبَصِير", "transliteration": "Al-Basir", "meaning": "The All-Seeing"},
    {"id": 28, "arabic": "ٱلْحَكَم", "transliteration": "Al-Hakam", "meaning": "The Judge"},
    {"id": 29, "arabic": "ٱلْعَدْل", "transliteration": "Al-'Adl", "meaning": "The Just"},
    {"id": 30, "arabic": "ٱللَّطِيف", "transliteration": "Al-Latif", "meaning": "The Subtle, Most Kind"},
    {"id": 31, "arabic": "ٱلْخَبِير", "transliteration": "Al-Khabir", "meaning": "The All-Aware"},
    {"id": 32, "arabic": "ٱلْحَلِيم", "transliteration": "Al-Halim", "meaning": "The Forbearing"},
    {"id": 33, "arabic": "ٱلْعَظِيم", "transliteration": "Al-'Azim", "meaning": "The Magnificent"},
    {"id": 34, "arabic": "ٱلْغَفُور", "transliteration": "Al-Ghafur", "meaning": "The All-Forgiving"},
    {"id": 35, "arabic": "ٱلشَّكُور", "transliteration": "Ash-Shakur", "meaning": "The Appreciative"},
    {"id": 36, "arabic": "ٱلْعَلِيّ", "transliteration": "Al-'Aliyy", "meaning": "The Most High"},
    {"id": 37, "arabic": "ٱلْكَبِير", "transliteration": "Al-Kabir", "meaning": "The Great"},
    {"id": 38, "arabic": "ٱلْحَفِيظ", "transliteration": "Al-Hafiz", "meaning": "The Preserver"},
    {"id": 39, "arabic": "ٱلْمُقِيت", "transliteration": "Al-Muqit", "meaning": "The Sustainer"},
    {"id": 40, "arabic": "ٱلْحَسِيب", "transliteration": "Al-Hasib", "meaning": "The Reckoner"},
    {"id": 41, "arabic": "ٱلْجَلِيل", "transliteration": "Al-Jalil", "meaning": "The Majestic"},
    {"id": 42, "arabic": "ٱلْكَرِيم", "transliteration": "Al-Karim", "meaning": "The Generous"},
    {"id": 43, "arabic": "ٱلرَّقِيب", "transliteration": "Ar-Raqib", "meaning": "The Watchful"},
    {"id": 44, "arabic": "ٱلْمُجِيب", "transliteration": "Al-Mujib", "meaning": "The Responsive"},
    {"id": 45, "arabic": "ٱلْوَاسِع", "transliteration": "Al-Wasi'", "meaning": "The All-Encompassing"},
    {"id": 46, "arabic": "ٱلْحَكِيم", "transliteration": "Al-Hakim", "meaning": "The All-Wise"},
    {"id": 47, "arabic": "ٱلْوَدُود", "transliteration": "Al-Wadud", "meaning": "The All-Loving"},
    {"id": 48, "arabic": "ٱلْمَجِيد", "transliteration": "Al-Majid", "meaning": "The Glorious"},
    {"id": 49, "arabic": "ٱلْبَاعِث", "transliteration": "Al-Ba'ith", "meaning": "The Resurrector"},
    {"id": 50, "arabic": "ٱلشَّهِيد", "transliteration": "Ash-Shahid", "meaning": "The Witness"},
    {"id": 51, "arabic": "ٱلْحَقّ", "transliteration": "Al-Haqq", "meaning": "The Truth"},
    {"id": 52, "arabic": "ٱلْوَكِيل", "transliteration": "Al-Wakil", "meaning": "The Trustee"},
    {"id": 53, "arabic": "ٱلْقَوِيّ", "transliteration": "Al-Qawiyy", "meaning": "The Most Strong"},
    {"id": 54, "arabic": "ٱلْمَتِين", "transliteration": "Al-Matin", "meaning": "The Firm"},
    {"id": 55, "arabic": "ٱلْوَلِيّ", "transliteration": "Al-Waliyy", "meaning": "The Protector"},
    {"id": 56, "arabic": "ٱلْحَمِيد", "transliteration": "Al-Hamid", "meaning": "The Praiseworthy"},
    {"id": 57, "arabic": "ٱلْمُحْصِي", "transliteration": "Al-Muhsi", "meaning": "The Enumerator"},
    {"id": 58, "arabic": "ٱلْمُبْدِئ", "transliteration": "Al-Mubdi'", "meaning": "The Originator"},
    {"id": 59, "arabic": "ٱلْمُعِيد", "transliteration": "Al-Mu'id", "meaning": "The Restorer"},
    {"id": 60, "arabic": "ٱلْمُحْيِي", "transliteration": "Al-Muhyi", "meaning": "The Giver of Life"},
    {"id": 61, "arabic": "ٱلْمُمِيت", "transliteration": "Al-Mumit", "meaning": "The Taker of Life"},
    {"id": 62, "arabic": "ٱلْحَيّ", "transliteration": "Al-Hayy", "meaning": "The Ever-Living"},
    {"id": 63, "arabic": "ٱلْقَيُّوم", "transliteration": "Al-Qayyum", "meaning": "The Self-Sustaining"},
    {"id": 64, "arabic": "ٱلْوَاجِد", "transliteration": "Al-Wajid", "meaning": "The Finder"},
    {"id": 65, "arabic": "ٱلْمَاجِد", "transliteration": "Al-Majid", "meaning": "The Majestic"},
    {"id": 66, "arabic": "ٱلْوَاحِد", "transliteration": "Al-Wahid", "meaning": "The One"},
    {"id": 67, "arabic": "ٱلْأَحَد", "transliteration": "Al-Ahad", "meaning": "The Unique"},
    {"id": 68, "arabic": "ٱلصَّمَد", "transliteration": "As-Samad", "meaning": "The Eternal"},
    {"id": 69, "arabic": "ٱلْقَادِر", "transliteration": "Al-Qadir", "meaning": "The Capable"},
    {"id": 70, "arabic": "ٱلْمُقْتَدِر", "transliteration": "Al-Muqtadir", "meaning": "The Determiner"},
    {"id": 71, "arabic": "ٱلْمُقَدِّم", "transliteration": "Al-Muqaddim", "meaning": "The Expediter"},
    {"id": 72, "arabic": "ٱلْمُؤَخِّر", "transliteration": "Al-Mu'akhkhir", "meaning": "The Delayer"},
    {"id": 73, "arabic": "ٱلْأَوَّل", "transliteration": "Al-Awwal", "meaning": "The First"},
    {"id": 74, "arabic": "ٱلْآخِر", "transliteration": "Al-Akhir", "meaning": "The Last"},
    {"id": 75, "arabic": "ٱلظَّاهِر", "transliteration": "Az-Zahir", "meaning": "The Manifest"},
    {"id": 76, "arabic": "ٱلْبَاطِن", "transliteration": "Al-Batin", "meaning": "The Hidden"},
    {"id": 77, "arabic": "ٱلْوَالِي", "transliteration": "Al-Wali", "meaning": "The Governor"},
    {"id": 78, "arabic": "ٱلْمُتَعَالِي", "transliteration": "Al-Muta'ali", "meaning": "The Most Exalted"},
    {"id": 79, "arabic": "ٱلْبَرّ", "transliteration": "Al-Barr", "meaning": "The Source of Goodness"},
    {"id": 80, "arabic": "ٱلتَّوَّاب", "transliteration": "At-Tawwab", "meaning": "The Acceptor of Repentance"},
    {"id": 81, "arabic": "ٱلْمُنْتَقِم", "transliteration": "Al-Muntaqim", "meaning": "The Avenger"},
    {"id": 82, "arabic": "ٱلْعَفُوّ", "transliteration": "Al-'Afuww", "meaning": "The Pardoner"},
    {"id": 83, "arabic": "ٱلرَّؤُوف", "transliteration": "Ar-Ra'uf", "meaning": "The Compassionate"},
    {"id": 84, "arabic": "مَالِكُ ٱلْمُلْك", "transliteration": "Malik al-Mulk", "meaning": "Owner of Sovereignty"},
    {"id": 85, "arabic": "ذُو ٱلْجَلَالِ وَٱلْإِكْرَام", "transliteration": "Dhu al-Jalali wa al-Ikram", "meaning": "Lord of Glory and Honor"},
    {"id": 86, "arabic": "ٱلْمُقْسِط", "transliteration": "Al-Muqsit", "meaning": "The Equitable"},
    {"id": 87, "arabic": "ٱلْجَامِع", "transliteration": "Al-Jami'", "meaning": "The Gatherer"},
    {"id": 88, "arabic": "ٱلْغَنِيّ", "transliteration": "Al-Ghaniyy", "meaning": "The Independent"},
    {"id": 89, "arabic": "ٱلْمُغْنِي", "transliteration": "Al-Mughni", "meaning": "The Enricher"},
    {"id": 90, "arabic": "ٱلْمَانِع", "transliteration": "Al-Mani'", "meaning": "The Preventer"},
    {"id": 91, "arabic": "ٱلضَّارّ", "transliteration": "Ad-Darr", "meaning": "The Distresser"},
    {"id": 92, "arabic": "ٱلنَّافِع", "transliteration": "An-Nafi'", "meaning": "The Benefactor"},
    {"id": 93, "arabic": "ٱلنُّور", "transliteration": "An-Nur", "meaning": "The Light"},
    {"id": 94, "arabic": "ٱلْهَادِي", "transliteration": "Al-Hadi", "meaning": "The Guide"},
    {"id": 95, "arabic": "ٱلْبَدِيع", "transliteration": "Al-Badi'", "meaning": "The Incomparable"},
    {"id": 96, "arabic": "ٱلْبَاقِي", "transliteration": "Al-Baqi", "meaning": "The Everlasting"},
    {"id": 97, "arabic": "ٱلْوَارِث", "transliteration": "Al-Warith", "meaning": "The Inheritor"},
    {"id": 98, "arabic": "ٱلرَّشِيد", "transliteration": "Ar-Rashid", "meaning": "The Guide to Right Path"},
    {"id": 99, "arabic": "ٱلصَّبُور", "transliteration": "As-Sabur", "meaning": "The Patient"}
  ]
};

// State management
class AppState {
  constructor() {
    this.currentSection = 'tasbih';
    this.counters = {};
    this.filteredNames = islamicData.names_of_allah;
    this.currentNamesPage = 1;
    this.namesPerPage = 12;
    this.searchQuery = '';
    this.loadFromStorage();
  }

  saveToStorage() {
    localStorage.setItem('tasbih-app-state', JSON.stringify({
      counters: this.counters,
      currentSection: this.currentSection
    }));
  }

  loadFromStorage() {
    const saved = localStorage.getItem('tasbih-app-state');
    if (saved) {
      const data = JSON.parse(saved);
      this.counters = data.counters || {};
      this.currentSection = data.currentSection || 'tasbih';
    }
  }

  getCounter(itemType, itemId) {
    const key = `${itemType}-${itemId}`;
    if (!this.counters[key]) {
      this.counters[key] = {
        value: 0,
        sessionValue: 0,
        totalValue: 0
      };
    }
    return this.counters[key];
  }

  updateCounter(itemType, itemId, updates) {
    const key = `${itemType}-${itemId}`;
    if (!this.counters[key]) {
      this.counters[key] = {
        value: 0,
        sessionValue: 0,
        totalValue: 0
      };
    }
    Object.assign(this.counters[key], updates);
    this.saveToStorage();
  }

  incrementCounter(itemType, itemId, target) {
    const counter = this.getCounter(itemType, itemId);
    if (counter.value < target) {
      counter.value++;
      counter.sessionValue++;
      counter.totalValue++;
      this.updateCounter(itemType, itemId, counter);
    }
    return counter;
  }

  decrementCounter(itemType, itemId) {
    const counter = this.getCounter(itemType, itemId);
    if (counter.value > 0) {
      counter.value--;
      this.updateCounter(itemType, itemId, counter);
    }
    return counter;
  }
}

// Initialize app state
const appState = new AppState();

// Navigation functionality
function initNavigation() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const sections = document.querySelectorAll('.content-section');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetSection = button.dataset.section;
      
      // Update active tab
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update active section
      sections.forEach(section => section.classList.remove('active'));
      document.getElementById(`${targetSection}-section`).classList.add('active');
      
      // Update app state
      appState.currentSection = targetSection;
      appState.saveToStorage();
      
      // Load content if needed
      if (targetSection === 'names') {
        renderNames();
      }
    });
  });

  // Set initial active tab
  const initialTab = document.querySelector(`[data-section="${appState.currentSection}"]`);
  if (initialTab) {
    initialTab.click();
  }
}

// Tasbih functionality
function createTasbihCard(item) {
  const counter = appState.getCounter('tasbih', item.id);
  const progress = (counter.value / item.counter.target) * 100;
  
  return `
    <div class="card tasbih-card" data-testid="card-tasbih-${item.id}">
      <div class="card-content">
        <div class="card-header">
          <div class="tasbih-info">
            <h3 class="tasbih-title" data-testid="text-tasbih-title-${item.id}">${item.title}</h3>
            <div class="arabic-text" data-testid="text-arabic-${item.id}">${item.arabic}</div>
            <div class="transliteration" data-testid="text-transliteration-${item.id}">${item.transliteration}</div>
            <div class="meaning" data-testid="text-meaning-${item.id}">${item.meaning}</div>
          </div>
          <div class="tasbih-meta">
            <div data-testid="text-recommended-${item.id}">${item.recommended.times}× ${item.recommended.context}</div>
          </div>
        </div>
        
        <div class="progress-section">
          <div class="progress-header">
            <span data-testid="text-progress-${item.id}">Progress</span>
            <span data-testid="text-progress-count-${item.id}">${counter.value}/${item.counter.target}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%" data-testid="progress-fill-${item.id}"></div>
          </div>
        </div>
        
        <div class="counter-section">
          <div class="counter-controls">
            <button 
              class="counter-button ${counter.value <= 0 ? 'disabled' : ''}" 
              onclick="updateTasbihCounter(${item.id}, -1, ${item.counter.target})"
              ${counter.value <= 0 ? 'disabled' : ''}
              data-testid="button-decrement-${item.id}"
            >
              <span class="minus-icon"></span>
            </button>
            <div class="counter-value" data-testid="text-counter-value-${item.id}">${counter.value}</div>
            <button 
              class="counter-button primary ${counter.value >= item.counter.target ? 'disabled' : ''}" 
              onclick="updateTasbihCounter(${item.id}, 1, ${item.counter.target})"
              ${counter.value >= item.counter.target ? 'disabled' : ''}
              data-testid="button-increment-${item.id}"
            >
              <span class="plus-icon"></span>
            </button>
          </div>
          <div class="session-info-box">
            <div class="session-label">Session</div>
            <div class="session-value" data-testid="text-session-value-${item.id}">${counter.sessionValue}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function updateTasbihCounter(itemId, change, target) {
  if (change > 0) {
    appState.incrementCounter('tasbih', itemId, target);
  } else {
    appState.decrementCounter('tasbih', itemId);
  }
  renderTasbih();
}

function renderTasbih() {
  const container = document.getElementById('tasbih-container');
  container.innerHTML = islamicData.tasbih.map(item => createTasbihCard(item)).join('');
}

// Duas functionality
function createDuaCard(item) {
  return `
    <div class="card dua-card" data-testid="card-dua-${item.id}">
      <div class="card-content">
        <div class="card-header">
          <h3 class="dua-title" data-testid="text-dua-title-${item.id}">${item.title}</h3>
          <span class="dua-source" data-testid="text-dua-source-${item.id}">${item.source}</span>
        </div>
        <div class="dua-content">
          <div class="arabic-text" data-testid="text-dua-arabic-${item.id}">${item.arabic}</div>
          <div class="transliteration" data-testid="text-dua-transliteration-${item.id}">${item.transliteration}</div>
          <div class="meaning" data-testid="text-dua-meaning-${item.id}">${item.meaning}</div>
        </div>
      </div>
    </div>
  `;
}

function renderDuas() {
  const container = document.getElementById('duas-container');
  container.innerHTML = islamicData.duas.map(item => createDuaCard(item)).join('');
}

// Names functionality
function createNameCard(item) {
  return `
    <div class="card name-card" data-testid="card-name-${item.id}">
      <div class="card-content">
        <div class="name-number" data-testid="text-name-number-${item.id}">${item.id}</div>
        <div class="arabic-text" data-testid="text-name-arabic-${item.id}">${item.arabic}</div>
        <div class="transliteration" data-testid="text-name-transliteration-${item.id}">${item.transliteration}</div>
        <div class="meaning" data-testid="text-name-meaning-${item.id}">${item.meaning}</div>
      </div>
    </div>
  `;
}

function filterNames(query) {
  const lowercaseQuery = query.toLowerCase();
  appState.filteredNames = islamicData.names_of_allah.filter(name => 
    name.transliteration.toLowerCase().includes(lowercaseQuery) ||
    name.meaning.toLowerCase().includes(lowercaseQuery) ||
    name.arabic.includes(query)
  );
  appState.currentNamesPage = 1;
  appState.searchQuery = query;
}

function renderNames() {
  const container = document.getElementById('names-container');
  const loadMoreBtn = document.getElementById('load-more-btn');
  
  const startIndex = 0;
  const endIndex = appState.currentNamesPage * appState.namesPerPage;
  const visibleNames = appState.filteredNames.slice(startIndex, endIndex);
  
  container.innerHTML = visibleNames.map(item => createNameCard(item)).join('');
  
  // Update load more button
  if (endIndex >= appState.filteredNames.length) {
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
  }
}

function loadMoreNames() {
  appState.currentNamesPage++;
  renderNames();
}

function initNamesSearch() {
  const searchInput = document.getElementById('names-search');
  const loadMoreBtn = document.getElementById('load-more-btn');
  
  searchInput.addEventListener('input', (e) => {
    filterNames(e.target.value);
    renderNames();
  });
  
  loadMoreBtn.addEventListener('click', loadMoreNames);
  
  // Set initial search value
  searchInput.value = appState.searchQuery;
}

// Initialize the app
function initApp() {
  initNavigation();
  renderTasbih();
  renderDuas();
  renderNames();
  initNamesSearch();
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);