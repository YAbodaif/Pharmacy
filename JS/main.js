export function navView(navid){
    // let navshow=document.getElementById(navid);
    let navhtml=`
    <nav class="navbar  navbar-expand-lg bg-primary " >
                <div class="container-fluid ">
                  <a class="navbar-brand text-warning fs-5 fw-bolder " href="#">Arabian</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2  mb-lg-0 ">
                      <li class="nav-item p-2 text-white " id="home-page">Home</li>
                      <li class="nav-item p-2 text-white">Beauty</li>
                      <li class="nav-item p-2 text-white">Personal Care</li>
                      <li class="nav-item p-2 text-white">Mom & Baby</li>
                      <li class="nav-item p-2 text-white">Vitamins & Nutrition</li>
                      <li class="nav-item p-2 text-white">Prescriptions</li>
                      <li class="nav-item p-2 text-white" id="about-page" >About</li>
                      <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li> -->
                      <!-- <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                      </li> -->
                    </ul>
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-warning text-white" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>
    `;
    document.getElementById(navid).innerHTML=navhtml;
}

export function aboutView(navid){
    let abouthtml=`
    <div class="container">
        <img src="./IMAGES/about-us.jpg" class="img-fluid" alt="">
        <div class="row">
            <div class="col-3 text-end">
              <h2>عرض الأسبوع</h2>
              <img src="" alt="عرض الأسبوع" srcset="">
              <p>اطلب استشارة شخصية من أحد صيادلة العزبي في أي فرع من فروعنا مجاناً</p>
              <h3>تابعونا علي الفيسبوك</h3>
            </div>
            <div class="col-8 text-end">
                <h2>نبذة عنا</h2>
                <p>تقود صيدليات العزبي مجال منتجات الرعاية الصحية والشخصية في مصر، ويمثل تاريخها قصة نجاح عظيمة، فقد بدأت المجموعة عام 1975 بصيدلية واحدة، ثم واصلت تطورها حتى أصبحت واحدة من أهم مؤسسات قطاع الرعاية الصحية في مصر. وتمتد خبرة المجموعة إلى أكثر من 40 عاماً، والجدير بالذكر أن صدليات العزبي تسعى دائماً للمزيد من التوسع وترسيخ قيادتها في قطاع الصيدلة على المستويين المحلي والإقليمي.

                    نجحت رؤية د. العزبي في النهوض بمهنة الصيدلة في مصر، فمن خلال تقديم نماذج عملية جديدة كلياً وطرح مجموعة غير مسبوقة من الخدمات، مثل توصيل الدواء للمنازل، وتقديم الاستشارة والدعم للمرضى، والإسهام في رفع الوعي الصحي، استطاعت صيدليات العزبي الارتقاء بمستوى الرعاية الصحية في مصر والتقدم يوماً بعد يوم منذ بداية أعمالها في سوق الدواء المصري.
                    
                    وإيماناً من المجموعة بأن النجاح ينطلق دائماً من داخل المؤسسة، أنشأنا مركز لتنمية المهارات على أحدث مستوى لدعم مواهب العاملين بمجموعة صيدليات العزبي. ويعمل بالمركز مجموعة من الخبراء لتدريب العاملين والصيادلة لضمان أفضل مستوى من الأداء والتشغيل ومواكبة المعايير الدولية. ومن خلال تعيين أفضل الكوادر ودعم مهاراتهم باستمرار، يتميز فريق عمل العزبي باعتباره مصدراً موثوقاً للنصح والدعم في مجال الخدمات الصيدلية.
                    
                    واليوم، تقود صيدليات العزبي سوق الدواء المصري من خلال توفير أجود منتجات الرعاية الصحية، وذلك عبر فروع المجوعة المنتشرة في جميع أنحاء الجمهورية والتي يصل عددها إلى 90 فرعاً، فضلاً عن مخازن صيدليات العزبي ومركز رعاية الطفل التابع لها.</p>
            </div>
        </div>
    </div>

    `;
    document.getElementById(navid).innerHTML=abouthtml;
}

export function homeView(navid){
    let homehtml=`
    <div class="container">
        <img src="./IMAGES/banner.jpg" class="img-fluid" alt="">
        <div class="row text-end">
                <h2>الرئيسية</h2>
                <p class="fs-5">      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum eum praesentium mollitia doloremque veritatis officia est excepturi possimus aliquam reprehenderit ipsa natus quisquam totam ut accusantium, voluptate magni nisi dicta laudantium earum! Sapiente sint voluptas, enim rem dignissimos quod nesciunt asperiores totam fugiat dolorum eum quia est corrupti non, debitis maiores exercitationem libero voluptate distinctio numquam dolorem iusto, quis quo animi. Quo id blanditiis repellat natus aliquid accusamus! Ut magni natus delectus sint? Atque numquam quasi enim ex neque magni, dolorum exercitationem nobis nulla sit? Vero mollitia odit maxime esse laboriosam atque quod sunt! Totam perferendis, veritatis, blanditiis quod cum aspernatur, quis soluta magni tenetur dolores nesciunt maxime iste. Mollitia sed, corrupti sit accusantium ab incidunt ducimus minus inventore perspiciatis, tenetur rem magnam voluptates. Blanditiis ducimus eius, excepturi commodi saepe et. Corrupti, alias velit. Nobis nihil porro assumenda aliquam omnis, veniam est iure ipsa dolore ab tempora architecto adipisci ea animi harum quam in corporis fuga minus necessitatibus natus cum autem corrupti. Pariatur expedita architecto fugit! Laboriosam adipisci culpa neque animi reiciendis esse non iusto in ab, laudantium quisquam incidunt minima hic laborum velit doloremque. Et, ea soluta vero perferendis eligendi nam eius cupiditate deleniti. Officiis veniam debitis exercitationem. 
                </p>
        </div>
    </div>
    `;
    document.getElementById(navid).innerHTML=homehtml;
}

export function footerView(navid){
  let footerhtml=`
  <div class="container-fluid foot text-bg-dark text-bg-warning text-center">
  <h4 class="p-4" >Arabian Pharmacy &copy; 2023</h4>
</div>
  `;
  document.getElementById(navid).innerHTML=footerhtml;
}
