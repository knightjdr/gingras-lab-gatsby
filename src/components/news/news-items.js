import React from 'react';
import { Link } from 'gatsby';

const newsItems = [
  {
    date: 'July 31, 2019',
    title: 'Postdoctoral and research associate positions',
    text: (
      <>
        Postdoctoral positions in
        {' '}
        <a href="https://apply.interfolio.com/58107">computational proteomics</a>
        {' '}
        (joint with Hannes Roest at UofT) and
        {' '}
        <a href="https://apply.interfolio.com/66200">chemical proteomics</a>
        {' '}
        are available in the Gingras lab. A Research Associate position is also available in
        {' '}
        <a href="https://contact2.mshri.on.ca/hr/DEFAULT.ASP?page=jobDetail&amp;job=1225">chemical proteomics</a>
        {' '}
        .
      </>
    ),
  },
  {
    date: 'June 19, 2019',
    title: 'GIX: Gene Information eXtension published',
    text: (
      <>
        James&apos; new Chrome and Firefox extension to quickly annotate a gene product directly in
        a web browser is now published a
        {' '}
        <a href="https://www.nature.com/articles/s41592-019-0477-9">Nature Methods</a>
        .
        You can download it from the
        {' '}
        <a href="https://gene-info.org">GIX</a>
        {' '}
        homepage.
      </>
    ),
  },
  {
    date: 'February 7, 2019',
    title: 'Rewiring the BET interactome',
    text: (
      <>
        See our manuscript by
        {' '}
        <a href="https://www.sciencedirect.com/science/article/pii/S1097276518309481?via%3Dihub">Lambert, Picaud et al.</a>
        {' '}
        that reports the effects of the drug JQ1 on the interactome of the BET family of
        bromodomains online at Molecular Cell. A great collaboration between the Gingras and
        Filippakopoulos labs, with help from many colleagues across the world.
      </>
    ),
  },
  {
    date: 'November 29, 2018',
    title: 'Computational postdoc positions available',
    text: (
      <>
        The Gingras and
        {' '}
        <a href="http://www.roestlab.org">Rost</a>
        {' '}
        labs are looking for postdoctoral fellows in Computational Proteomics to lead the
        development of the next generation of tools for Data Independent Analysis (
        <a href="https://apply.interfolio.com/30295/positions">application</a>
        ).
      </>
    ),
  },
  {
    date: 'August 14, 2018',
    title: 'Become my newest colleague!',
    text: (
      <>
        The
        {' '}
        <a href="http://lunenfeld.ca">Lunenfeld</a>
        {' '}
        is recruiting 3 new PIs in the Fall. The Molecular, Cell and Systems Biology position
        is now open - cross-appointment at the University of Toronto (
        <a href="https://apply.interfolio.com/53041">application</a>
        ). See all
        {' '}
        <a href="https://apply.interfolio.com/30295/positions">open positions</a>
        .
      </>
    ),
  },
  {
    date: 'July 11, 2018',
    title: 'Lentiviral toolbox: BioID across cell types!',
    text: (
      <>
        Payman Samavarchi-Tehrani and colleagues report in
        {' '}
        <a href="http://www.mcponline.org/content/early/2018/07/10/mcp.TIR118.000902.abstract">Molecular and Cellular Proteomics</a>
        {' '}
        a collection of lentiviral vectors to enable proximity-dependent biotinylation
        across cell types.
      </>
    ),
  },
  {
    date: 'March 15, 2018',
    title: 'Congrats Boris, recipient of NSERC studentship',
    text: (
      <>
        PhD student Boris Dyakov recently received an award from the
        {' '}
        <a href="http://www.nserc-crsng.gc.ca/index_eng.asp">Natural Sciences and Engineering Research Council of Canada</a>
        {' '}
        for his work aiming at characterizing nuclear bodies using proteomic tools.
      </>
    ),
  },
  {
    date: 'February 1, 2018',
    title: 'Cytosolic RNA granules and bodies out in Mol Cell',
    text: (
      <>
        Congratulations to all co-authors and to PDF Jiyoung Youn, profiled at
        {' '}
        <a href="http://www.cell.com/molecular-cell/fulltext/S1097-2765(17)30977-2">Molecular Cell</a>
        {' '}
        for her paper selected as a
        {' '}
        <a href="http://www.cell.com/molecular-cell/meet-the-author/ji-young-youn">Featured Article</a>
        {' '}
        (free). Also see the nice
        {' '}
        <a href="http://www.cell.com/molecular-cell/fulltext/S1097-2765(18)30049-2">Preview</a>
        {' '}
        by Simon Alberti.
      </>
    ),
  },
  {
    date: 'December 18, 2017',
    title: 'We are growing! Welcome to our new students!',
    text: (
      <>
        The rotation students were great this year: very happy to recruit Kento Abe, Julia
        Kitaygorodsky, Shimon Rosenthal (co-supervised with Ian Scott) and Francesco Zangari
        to the lab.
      </>
    ),
  },
  {
    date: 'June 29, 2017',
    title: 'ProHits-Viz paper is out at Nature Methods',
    text: (
      <>
        Knight et al. publishes web-tool to improve visualization of protein interaction data (
        <a href="https://www.nature.com/articles/nmeth.4330.epdf?author_access_token=Mxscfd4TsFnZDOMRVLu6q9RgN0jAjWel9jnR3ZoTv0N_r0kXKLsUVDr0iDmCOCg724OKwf_HwmR4LS6tUTcLnv0lZ95VTwz0lijrGL0nG0hlWQsNj9aa71B1ICe2lxjt">read-only version</a>
        ).
      </>
    ),
  },
  {
    date: 'May 29, 2017',
    title: 'Congrats to our students!',
    text: (
      <>
        Chris Go and Jonathan Roth are each awarded an Ontario Graduate Scholarship while Benjamin
        Piette receives a FRQNT from the Quebec government.
      </>
    ),
  },
  {
    date: 'April 4, 2017',
    title: 'Papers delineate MOB1 role in Hippo signaling',
    text: (
      <>
        Amber Couzens, Shawn Xiong and collaborators used proteomics and structural and biophysical
        studies to uncover the function of MOB1 in the regulation of the Hippo signaling pathway.
        See both papers at Mol Cell Proteomics.
      </>
    ),
  },
  {
    date: 'November 22, 2016',
    title: 'Fresh off the press: phosphatases in mitosis',
    text: (
      <>
        St-Denis et al. report in this issue of
        {' '}
        <a href="http://www.cell.com/cell-reports/abstract/S2211-1247(16)31513-3">Cell Reports</a>
        {' '}
        the identification of phosphatases implicated in mitosis, and the elucidation of their
        interactomes.
      </>
    ),
  },
  {
    date: 'September 20, 2016',
    title: 'Congratulations to Ben, Boris and Cassandra!',
    text: (
      <>
        Our new students get departmental awards: a Cecil Yip doctoral award from the Donnelly
        Centre to Ben, the Norman Bethune Award to Boris and the Hannah Farkas-Himsley and Alexander
        Himsley ‎Memorial Prize to Cassandra (both from Molecular Genetics). Cassandra and Boris
        each also received OSOTF funding from the Lunenfeld-Tanenbaum Research Institute.
      </>
    ),
  },
  {
    date: 'September 20, 2016',
    title: 'New TFRI grant to "Team Hippo"',
    text: (
      <>
        A team composed of Jeff Wrana, Lil Attisano, Frank Sicheri, Helen McNeill, Steve Gallinger
        and Anne-Claude Gingras receives 2.25M to target the Hippo tumor suppressor pathway in
        cancer. Thanks to TFRI, donors and volunteers!
      </>
    ),
  },
  {
    date: 'June 1, 2016',
    title: 'Welcome Shen, new PDF in the group',
    text: (
      <>
        Shen Zhang recently joined from the Dalian Institute of Chemical Physics, Chinese Academy of
        Sciences and brings new expertise in quantitative proteomics.
      </>
    ),
  },
  {
    date: 'May 2, 2016',
    title: 'ProHits 4.0 released and published',
    text: (
      <>
        The ProHits 4.0 publication in press at J Proteomics (Liu et al) describes the use of our
        {' '}
        <a href="http://prohitsms.com/">ProHits LIMS</a>
        {' '}
        for Data Independent Acquisition through the incorporation of
        {' '}
        <a href="http://diaumpire.sourceforge.net/">DIA-Umpire</a>
        ,
        {' '}
        <a href="http://proteomics.ucsd.edu/software-tools/msplit-dia/">MSPLIT-DIA</a>
        {' '}
        and
        {' '}
        <a href="http://mapdia.sourceforge.net/Main.html">mapDIA</a>
        .
      </>
    ),
  },
  {
    date: 'May 1, 2016',
    title: 'Welcome Bhavisha and Debbie',
    text: (
      <>
        Bhavisha is now assisting Dushyandi in the essential lab manager position while
        Debbie is working on our recently funded CCSRI Innovation grant. Amber is back to
        continue her work on Hippo signaling.
      </>
    ),
  },
  {
    date: 'March 12, 2016',
    title: 'Welcome Stefan, farewell Wade',
    text: (
      <>
        Welcome to Stefan Maier, PDF who will be developing new proteomics approaches. We
        are sad to say goodbye to our longtime member Wade Dunham who is starting a new
        venture outside of the city.
      </>
    ),
  },
  {
    date: 'February 5, 2016',
    title: 'Thank you, Canadian Cancer Society!',
    text: (
      <>
        Thanks to the donors and volunteers of the Canadian Cancer Society, our lab received
        a two-year grant to investigate endocytic organelles as sites of cellular growth control.
      </>
    ),
  },
  {
    date: 'January 1, 2016',
    title: 'Happy 2016 and welcome all new members!',
    text: (
      <>
        Welcome to the lab to our new students Ben, Boris and Cassandra! Dushyandi replaces
        Marilyn as co-manager of the lab. Good luck to Marilyn and hubby Prof Smith in Montreal!
      </>
    ),
  },
  {
    date: 'November 10, 2015',
    title: 'MSPLIT-DIA paper is out in Nature Methods',
    text: (
      <>
        In a collaboration with
        {' '}
        <a href="http://proteomics.ucsd.edu/">Nuno Bandeira, UCSD</a>
        , we are reporting in
        {' '}
        <a href="https://www.nature.com/nmeth/journal/vaop/ncurrent/full/nmeth.3655.html">Nature Methods</a>
        {' '}
        a new spectral matching approach for peptide identification from DIA. This will be
        incorporated in the next
        {' '}
        <a href="http://prohitsms.com/">ProHits</a>
        {' '}
        release.
      </>
    ),
  },
  {
    date: 'August 7, 2015',
    title: 'Thank you, Cancer Research Society!',
    text: (
      <>
        Our lab receives 2 year grant from the Cancer Research Society. We thank the supporters and
        volunteers of the CRS for all their efforts!
      </>
    ),
  },
  {
    date: 'July 30, 2015',
    title: 'JP Lambert awarded CRS career transition award',
    text: (
      <>
        Jean-Philippe is awarded a prestigious Scholarship for the Next Generation of Scientists
        from the Cancer Research Society!
      </>
    ),
  },
  {
    date: 'July 2, 2015',
    title: 'Association of E4orf4 with two major phosphatases',
    text: (
      <>
        In collaboration with the Branton lab (McGill), MSc student Yiwang Zhou uncovers new
        mechanisms of signaling regulation by Adenovirus E4orf4: E4orf4 regulates Hippo signaling
        though PP1 and PP2A.
      </>
    ),
  },
  {
    date: 'June 18, 2015',
    title: 'A Parkinson Society of Canada fellowship to Geoff!',
    text: (
      <>
        Geoff Hesketh, PDF, receives the prestigious award for his mass spectrometry based
        characterization of trafficking proteins implicated in Parkinson disease pathogenesis.
      </>
    ),
  },
  {
    date: 'March 31, 2015',
    title: 'Network Biology Collaborative Centre is a GIN node',
    text: (
      <>
        New Funding from Genome Canada for the SMART and proteomics facilities at LTRI. The
        {' '}
        <a href="http://nbcc.lunenfeld.ca/">NBCC</a>
        {' '}
        team led by Jeff Wrana and Anne-Claude Gingras becomes a Genomics Innovation network node.
      </>
    ),
  },
  {
    date: 'March 25, 2015',
    title: 'Worm CCM3 regulates excretory canal',
    text: (
      <>
        Ben Lant publishes new research in
        {' '}
        <a href="http://www.ncbi.nlm.nih.gov/pubmed/25743393">Nature Communications</a>
        ; work funded by joint CIHR to Drs. Derry and Gingras.
      </>
    ),
  },
  {
    date: 'February 7, 2015',
    title: 'Non-enzymatic role for myotubularins in cell cycle',
    text: (
      <>
        Nicole St-Denis et al. report that MTMR3 & 4 control abscission via interactions
        with PLK1 and CEP55.
      </>
    ),
  },
  {
    date: 'January 30, 2015',
    title: 'DIA-Umpire: a new way to look at SWATH data',
    text: (
      <>
        A collaboration between the Gingras and Nesvizhskii labs leads to the development
        of a complete informatics pipeline for the analysis of DIA/SWATH data (publication
        by Tsou et al. in Nature Methods).
      </>
    ),
  },
  {
    date: 'December 16, 2014',
    title: 'Lap-Chee Tsui Publication award to Amber Couzens',
    text: (
      <>
        Read again the winning publication on the
        {' '}
        <a href="http://stke.sciencemag.org/content/6/302/rs15.long">Hippo interactome</a>
        .
      </>
    ),
  },
  {
    date: 'November 28, 2014',
    title: 'Improving AP-MS data visualization',
    text: (
      <>
        James Knight and colleagues publish a
        {' '}
        <a href="http://prohitstools.mshri.on.ca/">web tool</a>
        {' '}
        for visualization of interaction proteomics data.
      </>
    ),
  },
  {
    date: 'September 15, 2014',
    title: 'How to score true interactions in BioID experiment',
    text: (
      <>
        <a href="https://www.sciencedirect.com/science/article/pii/S1874391914004357?via%3Dihub">JP Lambert et al.</a>
        {' '}
        thoroughly analyze background subtraction in BioID and compare BioID to standard AP-MS for
        chromatin proteins.
      </>
    ),
  },
  {
    date: 'July 17, 2014',
    title: 'Cell paper by the Gingras and Lindquist labs',
    text: (
      <>
        <a href="https://linkinghub.elsevier.com/retrieve/pii/S0092-8674(14)00740-5">Taipale et al.</a>
        {' '}
        report a quantitative chaperone interaction network that reveals the architecture of
        cellular protein homeostasis pathways.
      </>
    ),
  },
  {
    date: 'April 15, 2014',
    title: 'Chris Go receives doctoral award',
    text: (
      <>
        Congrats to Chris Go on getting a competitive Frederick Banting and Charles Best
        Canada Graduate Scholarship.
      </>
    ),
  },
  {
    date: 'November 20, 2013',
    title: 'Stopping the Hippos',
    text: (
      <>
        Hundreds of new connections and mechanisms of phospho-recognition in the Hippo
        pathway published by
        {' '}
        <a href="https://stke.sciencemag.org/content/6/302/rs15.long">Amber Couzens et al.</a>
        {' '}
        in Science Signaling - also see accompanying
        {' '}
        <a href="https://stke.sciencemag.org/content/6/302/pe36">perspective</a>
        {' '}
        by Eric Weiss.
      </>
    ),
  },
  {
    date: 'October 19, 2013',
    title: 'AP-SWATH paper in Nature Methods',
    text: (
      <>
        In a collaboration with
        {' '}
        <a href="https://sciex.com/">AB SCIEX</a>
        {' '}
        and the support of
        {' '}
        <a href="http://support.supportsinai.com/site/PageServer?pagename=mainsite_getinvolved_venturesinai">Venture Sinai</a>
        ,
        {' '}
        <a href="https://www.nature.com/articles/nmeth.2702">Lambert et al.</a>
        {' '}
        present AP-SWATH which rapidly maps differential interactomes.
      </>
    ),
  },
  {
    date: 'June 16, 2013',
    title: 'Congrats Nicole and Chris',
    text: (
      <>
        Postdoc Nicole St-Denis and grad student Chris Go each obtained competitive CIHR support for
        their studies of phosphatases.
      </>
    ),
  },
  {
    date: 'June 16, 2013',
    title: 'Publication of the CRAPome',
    text: (
      <>
        The Nesvizhskii and Gingras teams led an international effort to create a repository to help
        filter the cra... hmm... contaminants out of AP-MS data. See the paper by
        {' '}
        <a href="https://www.nature.com/articles/nmeth.2557">Datta Mellacheruvu et al.</a>
        , in Nature Methods.
      </>
    ),
  },
  {
    date: 'May 1, 2013',
    title: 'Funding from Genome Canada',
    text: (
      <>
        Anne-Claude Gingras and Mike Tyers (IRIC, Montreal) co-lead an international team for the
        development of ProHits Next Generation, a platform for interaction proteomics. Funding from
        Genome Canada was awarded in the recent Bioinformatics and Computational Biology
        competition.
      </>
    ),
  },
  {
    date: 'May 1, 2013',
    title: 'Funding from NSERC awarded',
    text: (
      <>
        We recently obtained a NSERC Discovery grant and an Accelerator Supplement to study the
        specificity in RNA storage and degradation associated to p bodies and stress granules.
      </>
    ),
  },
  {
    date: 'August 1, 2012',
    title: 'Special issue of Proteomics',
    text: (
      <>
        Have a look at the special issue of Proteomics on
        {' '}
        <a href="https://onlinelibrary.wiley.com/toc/16159861/2012/12/10">Protein Complexes and Interaction Networks</a>
        {' '}
        co-Edited by Alexey Nesvizhskii and Anne-Claude Gingras.
      </>
    ),
  },
  {
    date: 'June 1, 2012',
    title: 'James received Heart and Stroke funding!',
    text: (
      <>
        Congratulations to James on receiving a prestigious fellowship from the Heart and Stroke
        Foundation of Canada!
      </>
    ),
  },
  {
    date: 'December 1, 2011',
    title: 'Nicole receives TD Bank scholarship',
    text: (
      <>
        Postdoctoral fellow Nicole St-Denis is awarded prestigious TD Bank postdoctoral fellowship
        for her studies of phosphatases in mitosis.
      </>
    ),
  },
  {
    date: 'September 12, 2011',
    title: 'ProHits version 2.0.0',
    text: (
      <>
        Major new ProHits release - SAINT can be run seamlessly.
      </>
    ),
  },
  {
    date: 'August 19, 2011',
    title: 'Profile of Anne-Claude in ASBMB Today',
    text: (
      <>
        Zick Zagorski pens the
        {' '}
        <a href="http://www.asbmb.org/asbmbtoday/201108/sciencefocus/Gingras/">profile of Anne-Claude Gingras</a>
        {' '}
        in this month&apos;s issue of ASBMB Today.
      </>
    ),
  },
  {
    date: 'August 19, 2011',
    title: 'New releases for SAINT and ProHits',
    text: (
      <>
        We keep updating our software. Check our
        {' '}
        <Link className="nav-link" to="/resources/">Resources</Link>
        {' '}
        section for the latest downloads of our interaction proteomics tools.
      </>
    ),
  },
  {
    date: 'June 27, 2011',
    title: 'Publications by two of our students',
    text: (
      <>
        Graduate students Michelle Kean and Wade Dunham each got their first publication from the
        Gingras lab. Congrats to both! Access the publications at
        {' '}
        <a href="http://www.jbc.org/content/early/2011/05/11/jbc.M110.214486.abstract">J Biol Chem</a>
        {' '}
        and
        {' '}
        <a href="https://onlinelibrary.wiley.com/doi/10.1002/pmic.201000571/abstract">Proteomics</a>
        .
      </>
    ),
  },
  {
    date: 'December 10, 2010',
    title: 'SAINT paper published',
    text: (
      <>
        The Gingras and Nesvizhskii labs publish in Nature Methods the new version of the
        statistical tool SAINT for scoring interaction proteomics data. Download the free
        software at
        {' '}
        <a href="http://saint-apms.sourceforge.net/Main.html">sourceforge</a>
        .
      </>
    ),
  },
  {
    date: 'October 13, 2010',
    title: 'Just published!',
    text: (
      <>
        <a href="https://www.nature.com/nbt/journal/v28/n10/full/nbt1010-1015.html">ProHits: integrated software for mass spectrometry-based interaction proteomics</a>
        .
        The Gingras and Tyers labs publish in Nature Biotechnology
        their interaction proteomics data management system ProHits. Download the free software at
        {' '}
        <a href="http://prohitsms.com">prohitsms.com</a>
        .
      </>
    ),
  },
  {
    date: 'May 21, 2010',
    title: 'Fresh off the press',
    text: (
      <>
        <a href="https://www.sciencemag.org/cgi/content/abstract/328/5981/1043">A global protein kinase and phosphatase interaction network in yeast</a>
        .
        The Tyers, Nesvizhskii and Gingras labs team up to provide a comprehensive interaction
        map for yeast kinases and phosphatases (Breitkreutz et al., Science, 2010).
      </>
    ),
  },
  {
    date: 'April 29, 2010',
    title: 'New funding announced',
    text: (
      <>
        Dr. Gingras is part of a research team led by Prof. Pawson that was awarded a $7.7 million
        GL2 grant from Ontario&apos;s Ministry of Research and Innovation, which the team plans to
        use for understanding the assembly and function of dynamic signaling networks in complex
        diseases.
      </>
    ),
  },
];

export default newsItems;
