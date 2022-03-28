import Image from 'next/image'
import Card from '../../components/Card'
import Layout from '../../layouts/Layout'
import Link from 'next/link'
import axios from 'axios';

export default function resource({ resource }) {
    console.log(resource);
    return (
        <Layout>
            {/* { resource._id }  */}
            <div className='w-full'>
                <div className='flex flex-col w-full sm:max-w-xl lg:max-w-3xl mx-auto rounded-lg'>
                    <div className='image-container relative w-full h-72'>
                        <Image src="/img/background-login.jpg" layout="fill" className='rounded-b-lg object-cover image' />
                    </div>
                    <h1 className='my-4 mx-6 text-center text-3xl'>Titre un peu long pour dire que je fais des crêpes</h1>
                    <h4 className='my-2 mx-10 text-center text-1xl text-gray-800'>description un peu courte pour voir ce que ça fais une petite description. Bref elle est trop conne mais je dirais rien (tkt on parle pas de vous Amandine et Emmy) on parle d'une meuf sur tiktok et en plus gabriel est même pas au courant de quoi je parle</h4>
                    <p className='my-10'>Logoden biniou degemer mat an penn ar bed kennebeut, ur avel me brav kuzh riskl mui naetaat plijet, c’houmanant Oskaleg gwern divjod diwall traonienn koant. Berr us gouel eor garmiñ outi ar skrivañ tregas, kador bandenn Oskaleg c’hroc’hen ha gwer botez erc’h kurun, yaouankiz padout tu lann ouzh kontell a. Egistout bouton evezh a lun yec’hed pod ar Pleiber-Krist stivell burzhud kurun pounner lizher, pemzek ha gouriz Brest lien c’henderv e voull lein eus gouren. Maez bloavezh saout emaout kaeraat bihan peroked skouarn mezher, kanañ an dimeurzh raok Muzilheg eget  c’hoazh ganit dall, gwener bleud trugarez unan penaos rannañ da. Lizher echuiñ spontus koustañ re warnout harzoù chapel hejañ, merc’h raok kenañ lazhañ ganeoc'h enebour ni heñvel kiger, mignonez galleg gwalc’hiñ forzh davarn Montroulez Moel. Lokmikael (an-Traezh) ket ha mont vandenn daouarn arar eget keniterv gaoued Kemper ganti itron rumm, Ar Releg-Kerhuon stlakañ gouzañv breur kaol ur enno gwriat dleout Pempont c’hwec’hvet. Plac’h harz arc’h etre dañvad bemnoz kerc’h krouiñ c’hilpenn, gasoni sivi barv leskiñ benveg hemañ birviñ gleb dall, Roazhon ha dilun roud amprevan eñ bluenn. Gwaz tenn klask hevelep kuzh tost gwazh kozh da, ampart kalonek geniterv eürus vro c’hastell gervel ouzhit wrierez, plijadur da kouevr kleiz sul Santeg e. Pakañ kegin dale hi Gwened gouel Arre kaier blot, me an bruzun dibab levr Roazhon hervez rev lazhañ, gwele ha plijet horolaj louet e kennebeut. Werenn outo gortoz berr holen unnek oentr mignonez aer, plijout kroaz fuzuilh biken señin bruched harz digor ur, c’hreisteiz roll beg louet c’hemener amañ pobl.

Yezh Kemperle Pempoull nec’hin hejañ derc’hel lann plouz porpant, dibab a ouzhit kontell Plouneour-Menez kuz’h lamp am nec’h, mezher kelc’h beaj chaseal kavout eizh plant. Lanuon ruz evel dreist c’hoari mignon glin galon e, din skorn skignañ mont kompren istor prenañ warnout kuzhat, falc’hat Sant tro warnañ, hennont meud arar. Rannañ c’hoazh dianav skouer lamm labourat Mur klask hon, arrebeuri padout piler pesketaer ganti gavr da gallek gouzout, aotre eme war soñj davañjer dirak  enebour. Pepr maez anezhi dor miz blot ne ugent goulenn, kregiñ gortoz me doñjer bugale kein amanenn Arzhal grizilh, gwiskamant lec’h Plouezoc’h brank kambrig eget labous. Goap dezhañ kefe bugel etre  drezoc'h señin gwrierez stourm metrad kelc’hiek bep dro vunutenn, out talvezout barrad planken Ar Vouster kompren dianav Plegad-Gwerann heñvel paour pred. Wouel merc’h botez dindan ganti kemmañ peoc’h gouriz bag, miz den golo disul Gwaien walc’h garmiñ wechoù bazh, taer abaoe ur c’hof sklerijenn Gwikourvest bourc’h. Maez nijal ar sadorn laouen koustañ esaeañ e matezh, vuiañ kloued huñvre va skouarn askell dirak  sal ha, Kastell-Paol beajour da trizek sankañ c’houmoul abeg. Huchal Landreger kenavo pe Pask e peogwir louet baner, ur evidon wouel bed Gwengamp asied c’haier peoc’h Mur, benn bale gambr karrezek kambrig gwer mamm. Armel roud diskenn mont gouren a bleunioù ur garv c’hof stivell Atlantel pleg unnek, da difenn enebour golo diriaou mousc’hoarzhin den kerzhout lezirek echu krediñ. Wech daou c\hlas Brest loar Europa oabl ur Oskaleg pesketa hemañ Malo bro dad, ar gaoued Plouzane dougen ac'hanomp pesk Lokmikael (an-Traezh) pounner butuniñ laezh ganit.

Pemp tomm ha c’hae siwazh c’hwevrer fazi klouar erc’h doñv evidon Mur kenavo naer, caca ebeul ziskouez den eviti kêr galon lemm c’harrez piler amañ kastell. Ar Vouster diwezh gwenodenn kousket raok sec’h piler yenijenn saveteiñ bluenn gwazh keloù plad eviti, peoc’h lagad keñver mantell gwechall bennak aes ur dreuz ouzhpenn truez. Lazhañ ael koan houarn lenn teñval huchal gwerenn enno, rodell izel Mikael bezh kav eürus etre  tennañ leur, eur da an poultrenn gwinizh anezhañ Moel. Evitañ sizhun biken pesketa yalc’h vaneg betek kerc’h fuzuilh, c’hilpenn dimezell meurzh keniterv nag kibell c’helien avel lagad, brudet kaier Lanuon tavarnour c’har dibab etrezek. Pask c’houlz an oaled yod spont kartoñs yalc’h egile, arat Sarzhav chom Landreger a da glav paotrig kador, gouel Kemper neuiñ labous e wenodenn Plouezoc’h. Skrabañ Montroulez taol avat Gwikourvest an hemañ seizh nag, pevarzek tavarnour Entraven c’hoazh perak gontell broustañ an diwezh, iskis c’hilhog bleunioù ar Pont-Aven tiegezh gwaskañ. Gwenn foenn sankañ war sukr hennezh eta soubenn c’hig, abaoe dreist evel danvez talvoudus pelec’h egistomp C’hall disadorn, arvor barv tabut gleb arc’hant beajour c’henwerzh. Troad vatezh nizez atav egistañ kontell goulou digarez an, karrezek wastell chase soñjal trugarez war panevet  kuz’h mouchouer, ijinañ out dan lann loa stur douar. Outañ kig goulenn Pederneg urzh mat azezañ war endervezh, a gwenodenn roc’h gouez Gwengamp ebeul vaneg armel kegin, adarre Liger Brasparz Kernev tost Plouared berr. Kibellañ Montroulez eeun koad dimeurzh c’hof pehini eil e, neuiñ dindan  evañ ostaleri koar vuhez maen kleuz lous, pe da keuz unnek disheol ket ruilhañ.

</p>
                <div className="flex justify-between mb-10">
                    <p className='ml-16'>un petit con</p>
                    <p className='mr-16'>la date du jour</p>
                </div>
                </div>
            </div>

        </Layout>
    )
}

// export async function getServerSideProps(req) {

//     var resources = [];
    
//     var response = await axios.get('http://localhost:5000/api/resources');
//     resources = response.data;
  
//     return {
//         props: {
//             resources: resources
//         }
//     };
//   }

export async function getServerSideProps(req) {
    var id = req.params.id;
    var resources = [];


    var response = await axios.get('http://localhost:5000/api/resources/' + id);
    console.log('http://localhost:5000/api/resources/' + id);
    
    return {
        props: {
            resource: response.data
        }
    };
}
