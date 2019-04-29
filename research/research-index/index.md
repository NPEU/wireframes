---
layout: landing--npeu-home
title: Research
---
<!--
    Just to clarify:
    This page will be the default route of the component.
    /projects/ will be a route that shows a list of projects.
    If there's a search query (?rs=search) the the model should use that to filter the results.
    If instead there's another segment that matches a theme alias (e.g. /antenatal-care) then the 
    projects page should show all projects for that theme. So it treats the last segment as a
    parameter equivelent to ?th=theme. Uses theme name as page title.
    However, if there's a valid theme alias AND the final segment matches a project alias/id
    (e.g. /research/antenatal-care/review-of-fetal-alcohol-effects-122)
    then the projects page should show the 
    specified project and treat the final segment as a parameter equivelent to ?pr=project
    Uses the project name as the page title.
    
    NOTE - it's possible it'll be worth rethinking this...
    
    Hmmmm. Not right.
    
    
    /research/                           [shows intro, list of themes, etc.]
    /research/projects/                  [show all projects - allows for filtering]
    /research/projects/{theme-alias}/    [show projects filtered by {theme-name} equiv /research/projects?theme={theme-alias}]
    /research/projects/?search={keyword} [show projects filtered by {keyword}]
    /research/{project-alias}            [show project {project-alias} equiv /research?project={project-alias}]
    
-->
<div wf-area="white+outline" class="l-content-area  l-content-area--has-pull-outs">

    <div class="l-content-area__main  u-padding--top  u-padding--bottom">
        <div class="u-space--below">
            <h1>
                Research
            </h1>
            <p><b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt luctus rutrum. Vivamus commodo ornare laoreet. Quisque suscipit at massa in efficitur. Nam gravida nisi sit amet orci sagittis, et scelerisque ipsum dignissim.
            </b></p>
            
            <h2>NPEU research themes</h2>
            
            <p>
                Nunc eget diam lorem. Vestibulum eu luctus velit, imperdiet imperdiet nibh. Aliquam condimentum ut nunc non iaculis. Pellentesque vel tincidunt tortor. Praesent vel leo non neque molestie cursus. Morbi non rutrum leo, quis malesuada augue.
            </p>
        </div>
        
        <div class="l-content-area__pull-out  js-hide  u-space--below" id="filter_box">
            <div wf-area="white+outline+medium-padding" class="">
                <h3 class="n-section-menu__title  js-trigger">Filter themes</h3>
                
                <form>
                    <div>
                        <input id="tag1" type="checkbox" name="tag1" checked> <label for="tag1" class="u-padding--left--xs">NPEU</label>
                    </div>
                    <div>
                        <input id="tag2" type="checkbox" name="tag2" checked> <label for="tag2" class="u-padding--left--xs">PRU</label>
                    </div>
                </form>
                
            </div>
        </div>
        
        <div class="l-content-area__pull-out  js-hide  u-space--below" id="filter_box">
            <div wf-area="white+outline+medium-padding" class="">
                <h3 class="n-section-menu__title  js-trigger">Search for projects across all themes</h3>
                
                <form action="/research/projects" id="research-search-form" class="" method="GET">                    
                    <div>
                        <div class="composite  composite--block">
                            <input type="search" id="research-search" name="rs" placeholder="Seach">
                            <button class="composite--block__collapse" type="submit">
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20">
                                        <path fill="#fff" d="M12.917 11.667h-0.662l-0.229-0.229c0.817-0.946 1.308-2.175 1.308-3.521 0-2.992-2.425-5.417-5.417-5.417s-5.417 2.425-5.417 5.417 2.425 5.417 5.417 5.417c1.346 0 2.575-0.492 3.521-1.304l0.229 0.229v0.658l4.167 4.158 1.242-1.242-4.158-4.167zM7.917 11.667c-2.071 0-3.75-1.679-3.75-3.75s1.679-3.75 3.75-3.75 3.75 1.679 3.75 3.75-1.679 3.75-3.75 3.75z"></path>
                                        <text y="-10">Search</text>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
        
        <div>
            <div class="u-space--below">         
                <ul class="u-list--plain  u-list--plain--s  alpha-list">
                    <li>
                        <h3>A</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Alcohol in pregnancy</a> <span>(2)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/projects/antenatal-care">Antenatal care</a> <span>(10)</span></li>
                        </ul>
                    </li>
                    <li>
                        <h3>B</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Breastfeeding</a> <span>(7)</span></li>
                        </ul>
                    </li>
                    <li>
                        <h3>C</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Care of the compromised term infant</a> <span>(9)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Care of the preterm or low birthweight infant</a> <span>(16)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Child health and development</a> <span>(11)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Congenital anomalies</a> <span>(7)</span></li>
                        </ul>
                    </li>
                    <li>
                        <h3>D</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Disability</a> <span>(6)</span></li>
                        </ul>
                    </li>
                    <li>
                        <h3>I</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Infertility</a> <span>(5)</span></li>
                        </ul>
                    </li>
                    <li>
                        <h3>L</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Labour and delivery</a> <span>(25)</span></li>
                        </ul>
                    </li>
                    <li>
                        <h3>M</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Maternal morbidity and mortality [PRU]</a> <span>(7)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Mental health and wellbeing</a> <span>(8)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Multiple births</a> <span>(2)</span></li>
                        </ul>
                    </li>
                    <li>
                        <h3>O</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Obesity</a> <span>(5)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Organisation and delivery of maternity and neonatal care</a> <span>(8)</span></li>
                        </ul>
                    </li>
                    <li>
                        <h3>P</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Paediatric Surgery</a> <span>(10)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Parents</a> <span>(5)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Perinatal mental health and disabilities [PRU]</a> <span>(3)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Pregnancy loss and perinatal mortality [PRU]</a> <span>(4)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Preterm birth</a> <span>(14)</span></li>   
                        </ul>
                    </li>
                    <li>
                        <h3>R</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Resilience</a> <span>(1 project)</span></li>
                        </ul>
                    </li>
                    <li>
                        <h3>S</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Severe maternal morbidity and mortality</a> <span>(57)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Smoking in pregnancy</a> <span>(2)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Socioeconomic and ethnic inequalities</a> <span>(14)</span></li>
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Stillbirth and infant death</a> <span>(8)</span></li>
                        </ul>
                    </li>
                    <li>
                        <h3>T</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">The healthy mother and child [PRU]</a> <span>(14 project)</span></li>
                        </ul>
                    </li>
                    <li>
                        <h3>W</h3>
                        <ul class="u-list--plain  u-list--plain--xs">
                            <li class="u-text-group  u-text-group--push-apart"><a href="/research/#">Women's experience of maternity care</a> <span>(18)</span></li>
                        </ul>
                    </li>
                </ul>
                
            </div>

        </div>
        
        <div class="l-content-area__pull-out">
            <div wf-area="white+outline" class="">
                <div class="c-card">
                    <div class="c-card__image">
                        <div wf-box>
                            <div class="proportional-container  proportional-container--3-1"></div>
                        </div>
                    </div>
                    <div class="c-card__main">
                        <div class="c-card__body">
                            <h2 class="c-card__title">About NPEU</h2>
                            <p>
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tincidunt lorem sit amet enim.
                            </p>
                        </div>
                        <div class="c-card__footer">
                            <p>
                                <a href="/about" class="cta">About Us&nbsp;<svg display="none" class="icon  feather"><use xlink:href="#icon-chevron-right"></use></svg></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>